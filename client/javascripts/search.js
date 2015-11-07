$(document).ready(function(){
    $('#searchText').on('input', function() {
        var query = $("#searchText").val();
        console.log(query)
        doGlobalSearch(query);
    });
})




function doGlobalSearch(inputParam) {
    $.get('http://localhost:8000/search?termToSearch=' + inputParam, function (responseText) {
        console.log(responseText);
        $("#resultlist").empty().append(prettyPrint(responseText));
    });

    return false;
}

