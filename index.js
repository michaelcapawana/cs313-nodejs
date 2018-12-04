/*const express = require("express");
const port = process.env.PORT || 5000;
const path = require("path");

const controllers = require("./controllers.js")


express()
    .use(express.json()) //supports json encoded bodies
    .use(express.urlencoded({extended: true}))
    .use(express.static(path.join(__dirname, "public")))
    .get("/soft_drink_list", function(req, res) {
      console.log("getting soft drink list...");
      res.json({success:true});
	})

    .get("/soft_drink/:id", controllers.handleGetSoftDrink)

    .post("/soft_drink", controllers.handlePostSoftDrink)

    .listen(port, function() {                                                 
      console.log("Server listening on port " + port);                                                                                                      
	}); 


*/







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




/*
router.post('/users', function(req, res, next) {
	pool.connect(connectionString, function(err, client, done) {
		if (err) {
		    return console.error('error fetching client from pool', err);
		}
		console.log("connected to database");
		client.query('INSERT INTO users(username, password) VALUES($1, $2) returning id', [req.body.username, req.body.password], function(err, result) {
			done();
			if(err) {
			    return console.error('error running query', err);
			}
			res.send(result);
		    });
	    });
    });
*/


/*
app.get('/reviews', function(req, res, next) {
	pg.connect(connectionString, function(err, client, done) {
		if (err) {
		    return console.error('error fetching client from pool', err);
		}
		console.log("connected to database");
		client.query('SELECT * FROM reviews', function(err, result) {
			done();
			if (err) {
			    return console.error('error running query', err);
			}
			res.send(result);
		    });
	    });
    });

*/



                                                                                                                                                                                    
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
	    if (error || result == null) {
                response.status(500).json({success: false, data: error});
            } else {
                response.status(200).json(result);
            }
        });
}

function getReviewsFromDb(id, callback) {
    console.log("Getting reviews from DB with id: " + id);
    var sql = "SELECT * FROM reviews";
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


/*
    function getReviews(request, response) {                                                                                                     
	var id = request.query.id;
	getReviewsFromDb(id, function(error, result) {                                                                                                                       
		if (error || result == null) {
		    response.status(500).json({success: false, data: error});
		} else {
		    var reviews = result[0];                                                                                             
		    response.status(200).json(result[0]);
		}
	    });
    }

    function getReviewsFromDb(id, callback) {
	console.log("Getting reviews from DB with id: " + id);
	var sql = "SELECT * FROM reviews  WHERE id = $1::int";
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






function postReview(request, response) {
    var id = request.query.id;
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
    var sql = "INSERT INTO reviews(rating, description, reviewer, business_id) VALUES(5, 'So Good!', 'Michael Capawana', 6) returning id";
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
