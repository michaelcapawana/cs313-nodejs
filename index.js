var express = require('express');                                                                                                                                                  
var app = express();                                                                                                                                                                                                                                                                                                              
const { Pool } = require("pg");                                                                                                       
const connectionString = process.env.DATABASE_URL;                                                                                                                                  
const pool = new Pool({connectionString: connectionString});                                                                                                                        
                                                                                                                                                                                  
app.set('port', (process.env.PORT || 5000));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));                                                                                                                                     
                                                                                                                                                                                    
app.get('/getBusiness', function(request, response) {                                                                                                                                      getBusiness(request, response);
	console.log("This works");
});        

app.get('/ibc', function(request, response) {

    });

app.get('/getReviews', function(request, response) {
	getReviews(request, response);
    });

app.post('/postReview', function(request, response) {
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
    var sql = "SELECT id, name, score FROM business";                   
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
    var sql = "SELECT * FROM reviews WHERE business_id=$1";
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
    var id = request.query.id;
    console.log(request.query);
    postReviewFromDb(id, function(error, result) {
	    if (error || result == null) {
		response.status(500).json({success: false, data: error});
	    } else {
		var reviews = result[0];
		response.status(200).json(result[0]);
	    }
	});
}

function postReviewFromDb(id, callback) {
    console.log("Posting review to DB with id: " + id);
    var sql = "INSERT INTO reviews(rating, description, reviewer, business_id) VALUES($1, $2, $3, $4) returning id";
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
