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
		var myidtoinsert = Number(x) + 1 ;
      		//alert(myidtoinsert);
		//document.getElementById('link').href += myidtoinsert;

		//txt += "<tr><td><a href='/getReviews?id=' >" + myObj[x].name + "</a></td></tr>";
		txt += "<tr><td><a href='/getReviews?id=' onclick="location.href=this.href+'?key='+myidtoinsert;return false;" >" + myObj[x].name + "</a></td></tr>";
		//document.getElementById('link').href += myidtoinsert;
	    }
	    txt += "</table>"
	    document.getElementById("display").innerHTML = txt;
	    
	} else {
	}
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
}

