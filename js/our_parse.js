$(function(){
    Parse.initialize("tHUeptqZlUbor7NQaGSVZdrVEq9gzDLaWEU1oArl", "i0U15ICVA4b8lPG5jLWhkPI1PYLRW05PpqyBLTzQ");

    $('#start_song').click(function(event){
        event.preventDefault();
        var Song = Parse.Object.extend("Song");
        var mySong = new Song();
        mySong.set('name', $('#song_name').val());
        mySong.set('sections', $('#song').val().split('..'))
        mySong.save().then(function(object) {
          console.log($('#song_name').val());
          console.log($('#song').val());
        });

     
    });

    function getSections(){
        //Once again, we extend the Parse.Object class to make the ListItem class
        Song = Parse.Object.extend("Song");

        //This time, we use Parse.Query to generate a new query, specifically querying the ListItem table.
        query = new Parse.Query(Song);

        //We set constraints on the query.
        query.get("mLx7xRmSvg", {
          success: function(song) {
            // The object was retrieved successfully.
            mySections = song.get('sections');
            console.log(mySections);

            for (i = 0; i < mySections.length; i++) { 
                document.getElementById("section" + i).innerHTML = mySections[i];
            }

            // document.getElementById("section0").innerHTML = mySections[0];
            // document.getElementById("section1").innerHTML = mySections[1];
            // document.getElementById("section2").innerHTML = mySections[2];
            // document.getElementById("section3").innerHTML = mySections[3];
            // document.getElementById("section4").innerHTML = mySections[4];
            // document.getElementById("section5").innerHTML = mySections[5];
            // document.getElementById("section6").innerHTML = mySections[6];
            // document.getElementById("section7").innerHTML = mySections[7];
            // document.getElementById("section8").innerHTML = mySections[8];
            // document.getElementById("section9").innerHTML = mySections[9];
            // document.getElementById("section10").innerHTML = mySections[10];

          },
          error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          }
        });
        var sections = query.get("sections");
        console.log(query);

    }

    getSections();

}); 
