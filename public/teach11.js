function searchMovie() {
    var yourSearch = $("#search").val();
    var params = {s: yourSearch, apikey:"byuidaho"};
    $.get("http://www.omdbapi.com/", params, function(data, status){
	    update(data)});
}

function update(data) {
    if (data.Search && data.Search.length > 0) {
	var results = $("#ulResults");
	results.empty();
	for (var i = 0; i < data.Search.length; i++) {
	    var title = data.Search[i].Title;
	    results.append("<li><p>" + title + "</p></li>");
	}
    }
}

