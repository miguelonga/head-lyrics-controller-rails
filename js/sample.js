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
