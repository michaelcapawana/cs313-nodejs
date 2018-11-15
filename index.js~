const express = require('express')
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
    } else if(type == "Letters(Metered)") {
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
