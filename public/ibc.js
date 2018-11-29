function displayBusinesses() 
{
    //alert("Does this Work?");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    //alert("Does this Work?");
	    //alert(this.responseText);
	    var string = "<p>" + JSON.parse(this.responseText) + "</p>";
	    var txt += "<table border='1'>"
	    for (x in myObj) {
		txt += "<tr><td>" + string[x].name + "</td></tr>";
	    }
	    txt += "</table>"
	    //alert(string);
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