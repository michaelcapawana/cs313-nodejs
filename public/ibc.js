function displayBusinesses() 
{
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    myObj = JSON.parse(this.responseText);
	    txt += "<table border='1'>"
	    for (x in myObj) {
		var myidtoinsert = 1 ;
		alert(myidtoinsert);
		//document.getElementById('link1').href += myidtoinsert;
		txt += "<tr><td><a href='/getReviews?id=' myidtoinsert>" + myObj[x].name + "</a></td></tr>";
	    }
	    txt += "</table>"
	    document.getElementById("display").innerHTML = txt;
	    
	} else {
	}
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
}

