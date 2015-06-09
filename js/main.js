Parse.initialize("tHUeptqZlUbor7NQaGSVZdrVEq9gzDLaWEU1oArl", "i0U15ICVA4b8lPG5jLWhkPI1PYLRW05PpqyBLTzQ");

function getFavorites(){
    var Song = Parse.Object.extend("Song");
    var query = new Parse.Query(Song);
    query.descending("createdAt");
    query.limit(10);
    query.find({
      success: print,
      error: function(error) {
        console.log('error en getFavorites');
      }
    });
}

function print(results) {
	for (var i = 0; i < results.length; i++){
		var name = results[i].get('name');
		$("div#song-" + i).html( name + "<p><a href='http://localhost:8000/edit-song.html#" + results[i].id + "' class='btn btn-primary favorites-item-edit'>Editar</a> <a href='http://localhost:8000/index.html#"+ results[i].id + "' class='btn btn-default favorites-item'>Empezar</a></p>");
	}
}

getFavorites();


$('.favorites-item-edit').click(function(){
	id = window.location.href.split('#')[1];
	console.log('id');
});