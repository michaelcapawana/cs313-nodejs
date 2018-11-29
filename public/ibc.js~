function displayBusinesses() 
{
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    //alert("Does this Work?");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    //alert("Does this Work?");
	    //alert(this.responseText);

	    myObj = JSON.parse(this.responseText);
	    txt += "<table border='1'>"
	    for (x in myObj) {
		txt += "<tr><td>" + myObj[x].name + "</td></tr>";
	    }
	    txt += "</table>"


	    //var string = "<p>" + JSON.stringify(this.responseText) + "</p>";
	    document.getElementById("display").innerHTML = txt;
	    
	} else {
	    //alert(this.readyState);
	    //alert(this.status);
	}
    };
    //alert(window.location.hostname + "/getBusiness");
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
}



/*var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for (x in myObj) {
            txt += "<tr><td>" + myObj[x].name + "</td></tr>";
        }
        txt += "</table>"        
        document.getElementById("demo").innerHTML = txt;
    }
    };*/