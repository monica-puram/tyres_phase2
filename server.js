var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var crypto = require("crypto");
var nodemailer = require('nodemailer');
var fs = require('fs');
var bcrypt = require('bcrypt');
const {ObjectId} = require('mongodb');
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
var MongoClient = require('mongodb').MongoClient;
app.listen(3001);

//SignUp

app.post("/newUser", function (req, res) {
  var responseText = "";
  MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err;
    var dbo = db.db("tyres");
    var obj = req.body;
    obj.password = bcrypt.hashSync(obj.password, bcrypt.genSaltSync(8), null);
    obj.confirmPassword = bcrypt.hashSync(obj.confirmPassword, bcrypt.genSaltSync(8), null);
    try {
      dbo.collection('users').insertOne(obj, function (err, res) {
        if (err) {
          if (err.code === 11000) {
            responseText = "Duplicate emails";
          }
          else {
            responseText = err.errMsg;
          }
        } else if (res !== null) {
          if (res.insertedCount > 0) {
            responseText = "Successfully inserted!";
            var registrationInfo = {};
            registrationInfo.registeredEmail = obj.email;
            registrationInfo.uid = crypto.randomBytes(30).toString('hex');
            registrationInfo.verified = false;

            dbo.collection('registration').insertOne(registrationInfo, function (err, res) {
              if (err) throw err;
              else console.log("Updated registration information " + registrationInfo);
            })
            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'service.acc0007@gmail.com',
                pass: '14India#'
              }
            });
            var mailOptions = {
              to: obj.email,
              subject: 'Successfully registered!',
              html: '<div><p>Please copy and paste the registration link to activate your account</p><p><a href="http://localhost:3001/verification?uid=' + registrationInfo.uid + '">http://localhost:3001/verification?uid=' + registrationInfo.uid + '</a></p></div>'
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });
          }
        }
        sendResponse(responseText);
        db.close();
      });
    } catch (err) {
      responseText = err.errMsg;
      sendResponse(responseText);
    }

  });
  function sendResponse(responseText) {
    res.status("200").send(responseText);
  }
});

app.get('/populateFields', function (req, res) {
  var obj = {};
  MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err;
    var dbo = db.db("locations");
    dbo.collection("us").findOne({ "zip": req.query.zip }, function (err, res) {
      if (err) throw err;
      if (res != null) {
        obj.state_name = res.state_name;
        obj.city = res.city;
        obj.county_name = res.county_name;
      }
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
    dbo.collection("us_states_list").find({}, { projection: { _id: 0, state_name: 1 } }).toArray(function (err, res) {
      if (err) throw err;
      sendResponse(res);
      db.close();
    });

  });

  function sendResponse(obj) {
    res.status("200").send(obj);
  }
});


//Login

app.post('/signin', function (req, response) {
  var respObj ={
    success: false,
    message : '',
    tokenId: ''
  };
  MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err;
    var dbo = db.db('tyres');
    var obj = req.body;
    dbo.collection('users').find({ email: obj.email }).toArray(function (err, res) {
      if (err) {
        respObj.success = false;
        respObj.message = "Server Error";
        sendResponse(respObj);
      }
      else if (res.length !== 1) {
        respObj.success = false;
        respObj.message = "Invalid email address!";
        sendResponse(respObj);
      }
      else{
        const user = res[0];
        var validPassword = bcrypt.compareSync(obj.password, user.password);
        if (!validPassword) {
          respObj.success = false;
          respObj.message = "Invalid password. Please try again";
          sendResponse(respObj);
        }
        else{
          const userSession = {
            userId : user._id,
            timeStamp: Date.now()
          }
          
          dbo.collection('UserSession').insertOne(userSession,function(err, doc){
            if (err){
              respObj.success = false;
              respObj.message = "Server Error";
              sendResponse(respObj);
            }
            respObj.userName = user.firstName[0].toLocaleUpperCase() + user.firstName.substr(1, user.firstName.length).toLocaleLowerCase()
            respObj.success = true;
            respObj.message = "Valid Sign in";
            respObj.tokenId = doc.ops[0]._id;
            
            sendResponse(respObj);
           })
        }
    }
  })
  })
  function sendResponse(obj) {
    response.status("200").send(obj);
  }
});

//Logout

app.post('/logout',function(req,response){
  MongoClient.connect('mongodb://localhost:27017/', function(err,db){
    if (err) throw err;
    var dbo = db.db('tyres');
    var obj = req.body;
    dbo.collection('UserSession').deleteOne({_id: ObjectId(obj.token)}, function(err,res){
      if (err) throw err;
      else if(res.result.n === 1)
        response.send(true);
      else 
        response.send(false);
    })
  })
})


app.get('/sendEmail', function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'service.acc007@gmail.com',
      pass: '14India#'
    }
  });

  var mailOptions = {
    to: req.query.emailTo,
    subject: 'Registration successful!',
    text: 'Please verify to be able to login to your account'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.status("200").send("Email sent to " + req.query.emailTo);
})

app.get('/verification', function (req, response) {
  MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
    if (err) throw err;
    var dbo = db.db("tyres");
    var myquery = { uid: req.query.uid };
    var newvalues = { $set: { verified: "true" } };
    dbo.collection("registration").updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      if (res.result.n === 1) {
        if (res.result.nModified === 1) {
          fs.readFile('./src/responseHtmls/verified.html', function (err, data) {
            if (err) {
              response.writeHead(404, { 'Content-Type': 'text/html' });
              return response.end("404 Not Found");
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
          });
        } else if (res.result.n === 1 && res.result.nModified === 0) {
          fs.readFile('./src/responseHtmls/errVerify.html', function (err, data) {
            if (err) {
              response.writeHead(404, { 'Content-Type': 'text/html' });
              return response.end("404 Not Found");
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
          });
        }
      } else {
        fs.readFile('./src/responseHtmls/invalidVerification.html', function (err, data) {
          if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
          }
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.write(data);
          response.end();
        });
      }
      db.close();
    });

  });

})