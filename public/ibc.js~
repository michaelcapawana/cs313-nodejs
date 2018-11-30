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
		txt += "<tr><td><a href='' onclick='displayReviews()' >" + myObj[x].name + "</a></td></tr>";
		//document.getElementById('link').href += myidtoinsert;
	    }
	    txt += "</table>"
	    document.getElementById("displayBusiness").innerHTML = txt;
	    
	} else {
	}
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
}


function displayReviews()
{
    var ob, dbPara, xmlhttp, myOb, y, text = "";
    ob = { table: "customers", limit: 20 };
    dbPara = JSON.stringify(ob);
    var xhtt = new XMLHttpRequest();
    xhtt.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myOb = JSON.parse(this.responseText);
            text += "<table border='1'>"
            for (y in myOb) {
                var myidtoinsert = Number(y) + 1 ;
                text += "<tr><td>" + myOb[y].name + "</td></tr>";
            }
            text += "</table>"
            document.getElementById("displayReviews").innerHTML = text;

        } else {
        }
    };
    xhtt.open("GET", "/getReviews", true);
    xhtt.send();


}
