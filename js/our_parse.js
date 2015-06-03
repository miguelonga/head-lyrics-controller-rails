$(function(){
    Parse.initialize("tHUeptqZlUbor7NQaGSVZdrVEq9gzDLaWEU1oArl", "i0U15ICVA4b8lPG5jLWhkPI1PYLRW05PpqyBLTzQ");

    $('#start_song').click(function(event){
        event.preventDefault();
        var Song = Parse.Object.extend("Song");
        var mySong = new Song();
        mySong.set('name', $('#song_name').val());
        mySong.set('sections', $('#song').val().split('..'))
        mySong.save().then(function(object) {
        });

     
    });

    getFavorites();

    function getFavorites(){
        var Song = Parse.Object.extend("Song");
        var query = new Parse.Query(Song);
        query.limit(5);
        query.find({
          success: function(results) {
            for (var i = 0; i < results.length; i++) { 
              var song = results[i];
              console.log(results[i].id);
              $('#item' + i).innerHTML = song.id;
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
    }


    $('#search_song').click(function(event){
        event.preventDefault();
        Song = Parse.Object.extend("Song");
        query = new Parse.Query(Song);
        mySong = query.equalTo("name", $('#searcher').val());
        query.find({
          success: function(mySong) {
            getSections(mySong[0].id);
          },
          error: function(error) {
            console.log('error en la busqueda')
          }
        });

        });

     
    function getSections(id){
        Song = Parse.Object.extend("Song");
        query = new Parse.Query(Song);
        query.get(id, {
          success: function(song) {
            mySections = song.get('sections');
          },
          error: function(object, error) {
            console.log('error en getSections');
          }
        });

    }

}); 
