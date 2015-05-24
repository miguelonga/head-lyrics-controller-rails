(function(){


	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	$('#one').on('motion', function(){
		$( 'body' ).css( "background-color", "orange" );
		$.fn.fullpage.moveSectionUp();
	});

	$('#another').on('motion', function(){

		$( 'body' ).css( "background-color", "green" );
		$.fn.fullpage.moveSectionDown();

	});

})();

 $(document).ready(function() {
        $('#fullpage').fullpage({
            anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage'],
            scrollBar: true
        });
    });
