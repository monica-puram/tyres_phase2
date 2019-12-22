var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient;
app.listen(3001);


app.post("/newUser", function(req,res){
    var responseText = "";
    MongoClient.connect('mongodb://localhost:27017/', function(err, db){
        if (err) throw err;
        var dbo = db.db("tyres");
        var uniqueViolated = false;
        var obj = req.body;
       
        try{
            dbo.collection('users').insertOne(obj, function(err, res){
                if(err) {
                    if(err.code === 11000){
                        responseText = "Duplicate emails";
                    }
                    else{
                        responseText = err.errMsg;
                    }
                } else if(res !== null) {
                    if(res.insertedCount > 0) {
                        responseText = "Successfully inserted!";
                    }
                }
                sendResponse(responseText);
                db.close();
            });           
        } catch(err) {
            console.log("Error occurred : "+err);
            responseText = err.errMsg;
            sendResponse(responseText);
        }
        
    });
    function sendResponse(responseText) {
        res.status("200").send(responseText);
    }
});