var express = require('express');
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















/*var express = require("express");

var app = express();
var url = require('url');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", function(req, res) {
	console.log("A request came in for /");
	var name = "John";
	res.write("<h1>Welcome to the page, " + name + "</h1>");
	res.end();
});





app.get("/math", function(req, res){
	//var test = req.params.operation;
	//res.write(test);
	handleMath(req, res);
});


function handleMath(req, res) {
    var reqURL = url.parse(req.url, true);
    var op = reqURL.query.operation;
    var firstOp = Number(req.query.operand1);
    var secondOp= Number(req.query.operand2);
    console.log("A request came in for /math");


    op = op.toLowerCase();

    var num = 0;

    if(op == "add") {
	num = firstOp + secondOp;
    } else if(op == "subtract") {
	num = firstOp - secondOp;
    } else if(op == "multiply"){
	num = firstOp * secondOp;
    } else if(op == "divide"){
	num = firstOp / secondOp;
    } else {
	console.log("Error");
    }

    res.render("results", {num:num});



}







app.get("/tacos", function(req, res){
	//get number of tacos from the DB
	var num = getNumberOfTacos();

	//Render the page, showing the number of tacos
	res.render("tacos", {num:num});

        console.log("A request came in for /tacos");
});

function getNumberOfTacos(){
	return 10;
}

app.listen(5000, function() {
	console.log("Listening on port 5000");
	});*/