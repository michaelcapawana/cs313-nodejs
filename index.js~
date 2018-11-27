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