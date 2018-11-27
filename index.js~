/*const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/teach09', (req, res) => res.sendFile(path.join(__dirname, '/practice/public/form.html')))
  .get('/prove09', (req, res) => res.sendFile(path.join(__dirname, '/postalCalculator/public/form.html')))
  .get('/', (req, res) => res.render('pages/index'))
  .get('/helloWorld', (req, res) => res.sendFile(path.join(__dirname, '/public/helloWorld.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

*/
var express = require('express');                                                                                                                                                  
var app = express();                                                                                                                                                                                                                                                                                                              
const { Pool } = require("pg");                                                                                                       
const connectionString = process.env.DATABASE_URL;                                                                                                                                  
const pool = new Pool({connectionString: connectionString});                                                                                                                        
                                                                                                                                                                                  
app.set('port', (process.env.PORT || 5000));                                                                                                                                       
app.use(express.static(__dirname + '/public'));                                                                                                                                     
                                                                                                                                                                                    
app.get('/getBusiness', function(request, response) {                                                                                                                                      getBusiness(request, response);                                                                                                                                               });        


app.get('/getReviews', function(request, response) {
	getReviews(request, response);
    });

                                                                                                                                                                                    
app.listen(app.get('port'), function() {                                                                                                                                            
        console.log('Node app is running on port', app.get('port'));                                                                                                                
    });                                                                                                                                                                             
                                                                                                                                                                                    
function getBusiness(request, response) {                                                                                                                                               var id = request.query.id;                                                                                                                                                      
    getBusinessFromDb(id, function(error, result) {                                                                                                                                     if (error || result == null || result.length != 1) {                                                                                                                    
                response.status(500).json({success: false, data: error});                                                                                                           
            } else {                                                                                                                                                                
                var business = result[0];                                                                                                                                                           response.status(200).json(result[0]);                                                                                                                               
            }                                                                                                                                                                       
        });                                                                                                                                                                         
}                                                                                                                                                                                   
                                                                                                                                                                                    
function getBusinessFromDb(id, callback) {                                                                
    console.log("Getting business from DB with id: " + id);
    var sql = "SELECT id, name, score FROM business WHERE id = $1::int";                   
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


    function getReviews(request, response) {                                                                                                     
	var id = request.query.id;
	getReviewsFromDb(id, function(error, result) {                                                                                                                       
		if (error || result == null || result.length != 1) {
		    response.status(500).json({success: false, data: error});
		} else {
		    var reviews = result[0];                                                                                             
		    response.status(200).json(result[0]);
		}
	    });
    }

    function getReviewsFromDb(id, callback) {
	console.log("Getting reviews from DB with id: " + id);
	var sql = "SELECT id, rating, description, reviewer, business_id FROM reviews WHERE id = $1::int";
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