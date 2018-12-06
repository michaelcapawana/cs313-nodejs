var express = require('express');                                                                                                                                                  
var app = express();                                                                                                                                                                                                                                                                                                              
var bodyParser = require('body-parser');
const { Pool } = require("pg");                                                                                                       
const connectionString = process.env.DATABASE_URL;                                                                                                                                  
const pool = new Pool({connectionString: connectionString});                                                                                                                        
                                                                                                                                                                                  
app.set('port', (process.env.PORT || 5000));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(__dirname + '/public'));                                                                                                                                     
                                                                                                                                                                                    
app.get('/getBusiness', function(request, response) {                                                                                                                                      getBusiness(request, response);
});

app.get('/getScore', function(request, response) {                                                                            
	getScore(request, response);
    });        

app.get('/ibc', function(request, response) {

    });

app.get('/getReviews', function(request, response) {
	getReviews(request, response);
    });

app.post('/postReviews', function(request, response) {
	postReview(request, response);
    });



                                                                                                                                                                                    
app.listen(app.get('port'), function() {                                                                                                                                            
        console.log('Node app is running on port', app.get('port'));                                                                                                                
    });                                                                                                                                                                             
                                                                                                                                                                                    
function getBusiness(request, response) {                                                                                                                                               var id = request.query.id;                                                                                                                                                      
    getBusinessFromDb(id, function(error, result) {                                                                                                                                     if (error || result == null) {                                                                                                                    
                response.status(500).json({success: false, data: error});                                                                                                           
            } else {                                                                                                                                                                
                var business = result[0];                                                                                                                                                           response.status(200).json(result);                                                                                                                               
            }                                                                                                                                                                       
        });                                                                                                                                                                         
}                                                                                                                                                                                   
                                                                                                                                                                                    
function getBusinessFromDb(id, callback) {                                                                
    console.log("Getting business from DB with id: " + id);
    var sql = "SELECT id, name, score FROM business ORDER BY name ASC";
    var params = [];                                                                                                                                                              
                                                                                                                                                                                    
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



function getScore(request, response) {                                                                                                                            
    var id = request.query.id;
    getScoreFromDb(id, function(error, result) {                                                                                                                        
	    if (error || result == null) {
                response.status(500).json({success: false, data: error});
            } else {
                response.status(200).json(result);
            }
        });
}

function getScoreFromDb(id, callback) {
    console.log("Getting business from DB with id: " + id);
    var sql = "SELECT AVG(rating) FROM reviews";
    var params = [];

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



function getReviews(request, response) {                                                                                                                 
    var id = request.query.id;
    getReviewsFromDb(id, function(error, result) {                                                                                                             
	    console.log(result);
	    if (error || result == null) {
                response.status(500).json({success: false, data: error});
            } else {
                response.status(200).json(result);
            }
        });
}

function getReviewsFromDb(id, callback) {
    console.log("Getting reviews from DB with id: " + id);
    var sql = "SELECT * FROM reviews WHERE business_id=$1 ORDER BY id DESC";
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


function postReview(request, response) {
    postReviewFromDb(request.body, function(error, result) {
	    if (error || result == null) {
		response.status(500).json({success: false, data: error});
	    } else {
		var reviews = result[0];
		response.status(200).json(result[0]);
	    }
	});
}

function postReviewFromDb(body, callback) {
    var sql = "INSERT INTO reviews(rating, description, reviewer, business_id) VALUES($1, $2, $3, $4) returning id";
    var params = [body.rating, body.description, body.reviewer, body.business];

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
