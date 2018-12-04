var showReviews = 0;

function displayBusinesses() 
{
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table>"
            for (x in myObj) {
                var myidtoinsert = Number(x) + 1 ;
                //alert(myidtoinsert);                                                                                                                                               
                //document.getElementById('link').href += myidtoinsert;                                                                                                              

                //txt += "<tr><td><a href='/getReviews?id=' >" + myObj[x].name + "</a></td></tr>";                                                                                   
	       
                txt += "<tr><td><a href='#' onclick='displayReviews("+myObj[x].id +")' >" + myObj[x].name + " - " + myObj[x].score + "</a></td></tr>";
                //document.getElementById('link').href += myidtoinsert;                                                                                                              
            }
            txt += "</table>"
            document.getElementById("displayBusiness").innerHTML = txt;

        } else {
	    
        }
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
    alert(showReviews);
    if(showReviews != 0) {
	txt = "";
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
		txt += "<table>";
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

}


function displayReviews(id)
{
    showReviews = id;
    // alert(showReviews);
}
