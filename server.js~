//Teach 11 Activity
var express = require('express');                                                                                                                                                  
var app = express();                                                                                                                                                                 
var session = require('express-session');                                                                                                                                                                                     
const { Pool } = require("pg");                                                                                                                                                      
const connectionString = process.env.DATABASE_URL;                                                                                                                                   
const pool = new Pool({connectionString: connectionString});                                                                                                                         
                                                                                                                                                                                     
app.set('port', (process.env.PORT || 5000));            
app.use(express.static(__dirname + '/public')); 

app.listen(app.get('port'), function() {                                                                                                                                             
        console.log('Node app is running on port', app.get('port'));                                                                                                                 
    });     










//Teach 10 Activity
/*var express = require('express');
var app = express();

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/getPerson', function(request, response) {
        getPerson(request, response);
    });

app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
    });

function getPerson(request, response) {
    var id = request.query.id;
    getPersonFromDb(id, function(error, result) {
            if (error || result == null || result.length != 1) {
                response.status(500).json({success: false, data: error});
            } else {
                var person = result[0];
                response.status(200).json(result[0]);
            }
        });
}

function getPersonFromDb(id, callback) {
    console.log("Getting person from DB with id: " + id);
    var sql = "SELECT id, first, last, birthdate FROM person WHERE id = $1::int";
    var params = [id];

    pool.query(sql, params, function(err, result) {
            if (err) {
                console.log("Error in query: ")
                    console.log(err);
                callback(err, null);
            }
            console.log("Found result: " + JSON.stringify(result.rows));
            callback(null, result.rows);
        });
}
*/



//Prove 08 and Prove 09
/*var express = require("express");
var app = express();
var url = require('url');
const path = require('path')
const PORT = process.env.PORT || 5000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/helloWorld', (req, res) => res.sendFile(path.join(__dirname, '/public/helloWorld.html')))

app.get("/math", function(req, res){
        calcRate(req, res);
    });


function calcRate(req, res) {
    var reqURL = url.parse(req.url, true);
    var type = reqURL.query.type;
    var weight = Number(req.query.weight);
    var newWeight = 0;
    var price = 0;

    if(type == "Letters (Stamped)") {
        if(weight <= 3.5) {
	    newWeight = Math.ceil(weight);
	    if (newWeight == 1) {
		price = 0.50;
	    } else if (newWeight == 2) {
		price = 0.71;
	    } else if (newWeight == 3) {
		price = 0.92;
            } else if (newWeight == 4) {
		price = 1.13;
            }
	} else {
            price = "Sorry, no weights over 3.5 oz.";
	}
    } else if(type == "Letters (Metered)") {
	if(weight <= 3.5) {
            newWeight = Math.ceil(weight);
            if (newWeight == 1){
		price = 0.47;
            } else if (newWeight == 2) {
		price = 0.68;
            } else if (newWeight == 3) {
                price = 0.89;
            } else if (newWeight == 4) {
                price = 1.10;
            }
        } else {
            price = "Sorry, no weights over 3.5 oz.";
        }
    } else if(type == "Large Envelopes (Flats)"){
	if(weight <= 13) {
	    newWeight = Math.ceil(weight);
	    price = (1.00 + (0.21 * (newWeight-1)));
	} else {
	    price = "Sorry, no weights over 13 oz.";
	}
	
    } else if(type == "First-Class Package Service--Retail"){
	if(weight <= 13) {
            newWeight = Math.ceil(weight);
            if (newWeight == 1 || newWeight == 2 || newWeight == 3 || newWeight == 4) {
		price = 3.50;
	    } else if (newWeight == 5 || newWeight == 6 || newWeight == 7 || newWeight == 8) {
		price = 3.75;
	    } else if (newWeight == 9){
		price = 4.10;
	    } else if (newWeight == 10){
		price = 4.45;
            } else if (newWeight == 11){
		price = 4.80;
            } else if (newWeight == 12){
		price = 5.15;
            } else if (newWeight == 13){
		price = 5.50;
            }
        } else {
            price = "Sorry, no weights over 13 oz.";
		}
    } else {
        console.log("Error");
    }
    res.render("results", {mType:type, weight:weight, price:price});

}

app.listen(PORT, function() {
      console.log("Listening on port 5000");
  });
*/

