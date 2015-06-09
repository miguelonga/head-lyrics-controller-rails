$(function(){
    Parse.initialize("tHUeptqZlUbor7NQaGSVZdrVEq9gzDLaWEU1oArl", "i0U15ICVA4b8lPG5jLWhkPI1PYLRW05PpqyBLTzQ");

    $('#start_song').click(function(event){
        event.preventDefault();
        var Song = Parse.Object.extend("Song");
        var mySong = new Song();
        mySong.set('name', $('#song_name').val());
        mySong.set('sections', $('#song').val().split('..'))
        mySong.save().then(function(object){
            window.location.href = "http://localhost:8000/index.html#" + object.id;
            console.log(object.id);
        });
    });

    $('#search_song').click(function(event){
        event.preventDefault();
        Song = Parse.Object.extend("Song");
        query = new Parse.Query(Song);
        mySong = query.equalTo("name", $('#searcher').val());
        query.find({
          success: function(mySong) {
            window.location.replace("http://localhost:8000/index.html#" + mySong[0].id);
          },
          error: function(error) {
            console.log('error en la busqueda')
          }
        });
    });

}); 
