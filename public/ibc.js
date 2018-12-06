var newId = 0;
var score = 0;

function display() 
{
    if (newId == 0){
	var x = document.getElementById("leaveReview");
	x.style.display = "none";
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table>"
            for (x in myObj) {
		var rounded = Math.round( myObj[x].score * 10 ) / 10;
                var myidtoinsert = Number(x) + 1 ;
                txt += "<tr><td><a href='#' onclick='setId("+myObj[x].id +")' >" + myObj[x].name + " - " + rounded + "</a></td></tr>";
            }
            txt += "</table>"
            document.getElementById("displayBusiness").innerHTML = txt;

        } else {
	    
        }
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
    } else {
	document.getElementById("leaveReview").reset();
	var x = document.getElementById("leaveReview");
	x.style.display = "block";
	txt = "";
	var obj, dbParam, xmlhttp, myObj, x, txt = "";
	obj = { table: "customers", limit: 20 };
	dbParam = JSON.stringify(obj);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		myObj = JSON.parse(this.responseText);
		txt += "<table>";
		for (x in myObj) {
		    txt += "<tr><td>" + myObj[x].rating + "/5 Stars - " + myObj[x].reviewer + ": " + myObj[x].description + "</td></tr>";
		}
		txt += "</table>";;
		document.getElementById("displayReviews").innerHTML = txt;
		
	    } else {
	    }
	};
	xhttp.open("GET", "/getReviews?id=" + newId, true);
	xhttp.send();
    }

}


function setId(id)
{
    newId = id;
    display();
}

function postReviews() 
{
    var description = document.getElementById("description").value;
    var reviewer = document.getElementById("reviewer").value;
    var rating = document.getElementsByName("rating");
    for (var i=0, length = rating.length; i < length; i++){
	if (rating[i].checked) {
	    var score = rating[i].value;
	}
    }
    var values = {"description":description, "reviewer":reviewer, "rating":score, "business":newId};
       var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    myObj = JSON.parse(this.responseText);
	    display(newId);
	} else {
	}
    };
    xhttp.open("POST", "/postReviews", true);
    xhttp.setRequestHeader("Content-type", "application/JSON");
    xhttp.send(JSON.stringify(values));
    document.getElementById("leaveReview").reset();
    getScore();
    return false;
}

function getScore()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
	    score = myObj[0].avg;
	    postScore();
        } else {
        }
    };
    xhttp.open("GET", "/getScore", true);
    xhttp.send();
}

function postScore()
{
    var values = {"score":score, "business":newId}; 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
	    newId = 0;
            display(newId);
        } else {
        }
    };
    xhttp.open("POST", "/postScore", true);
    xhttp.setRequestHeader("Content-type", "application/JSON");
    xhttp.send(JSON.stringify(values));
    return false;
}
