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

 
  app.get('/populateFields', function (req, res) {
    var obj = {};
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;
        var dbo = db.db("locations");
        console.log("Connected to database !! ");
        console.log(req.query.zip);
        //console.log(typeof req.body);
        dbo.collection("us").findOne({"zip": req.query.zip}, function(err, res) {
            if (err) throw err;
            if(res != null) {
              obj.state_name = res.state_name;
              obj.city = res.city;
              obj.county_name = res.county_name;
            } 
                        
            console.log("Result : ", obj);
            sendResponse(obj);
            db.close();
        });
        
    });
  
    function sendResponse(obj) {
      res.status("200").send(obj);
    }
  });

  app.get('/populateStates', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
        if (err) throw err;
        var dbo = db.db("locations");
        console.log("Connected to database !! ");
        console.log(req.query.zip);
        //console.log(typeof req.body);
        dbo.collection("us_states_list").find({}, {projection:{_id:0, state_name:1}}).toArray(function(err, res) {
            if (err) throw err;
           
            console.log("StateList : ", res);
            sendResponse(res);
            db.close();
        });
        
    });
  
    function sendResponse(obj) {
      res.status("200").send(obj);
    }
  });