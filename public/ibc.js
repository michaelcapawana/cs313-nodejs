function displayBusinesses() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    document.getElementbyId("leftSide").innerHTML = this.responseText;
	}
    };
    xhttp.open("GET", window.location.hostname + "/getBusiness", true);
    xhtp.send();
}