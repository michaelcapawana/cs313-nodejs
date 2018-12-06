var newId = 0;
//var x = document.getElementById("leaveReview");
//x.style.display = "none";

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
                var myidtoinsert = Number(x) + 1 ;
                //alert(myidtoinsert);                                                                                                                                               
                //document.getElementById('link').href += myidtoinsert;                                                                                                              

                //txt += "<tr><td><a href='/getReviews?id=' >" + myObj[x].name + "</a></td></tr>";                                                                                   
	       
                txt += "<tr><td><a href='#' onclick='setId("+myObj[x].id +")' >" + myObj[x].name + " - " + myObj[x].score + "</a></td></tr>";
                //document.getElementById('link').href += myidtoinsert;                                                                                                              
            }
            txt += "</table>"
            document.getElementById("displayBusiness").innerHTML = txt;

        } else {
	    
        }
    };
    xhttp.open("GET", "/getBusiness", true);
    xhttp.send();
    } else {
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
