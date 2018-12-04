function displayBusinesses() 
{


    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	alert(this.readyState);
	alert(this.status);
        if (this.readyState == 4 && this.status == 200) {
            alert("WE MADE IT!!!");
            myObj = JSON.parse(this.responseText);
            alert(this.responseText);
            txt += "<table border='1'>";
            for (x in myObj) {
                txt += "<tr><td>" + myObj[x].reviewer + "</td></tr>";
            }
            txt += "</table>";;
            document.getElementById("displayReviews").innerHTML = txt;

	} else {
	}
    };
    xhttp.open("GET", "/getReviews", true);
    xhttp.send();




}


function displayReviews()
{
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    alert(this.readyState);
    alert(this.status);
	if (this.readyState == 4 && this.status == 200) {
            alert("WE MADE IT!!!");
            myObj = JSON.parse(this.responseText);
	    alert(this.responseText);
	    txt += "<table border='1'>";
	    for (x in myObj) {
		txt += "<tr><td>" + myObj[x].reviewer + "</td></tr>";
	    }
	    txt += "</table>";;
	    document.getElementById("displayReviews").innerHTML = txt;

	    } else {
	    }
	};
    xhttp.open("GET", "/getReviews", true);
    xhttp.send();
}
