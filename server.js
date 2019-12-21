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

app.post('/newUser', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;
        var dbo = db.db("tyres");
        
        console.log(req.body);
        //console.log(typeof req.body);
        var myobj = req.body;
        dbo.collection("users").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
        
    });
        
        res.json(req.body)
        
        
  });