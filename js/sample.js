(function(){
	var counter = 0;



	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	$('#one').on('motion', function(){
		console.log('izquierda---------')
		$( 'body' ).css( "background-color", "orange" );
		counter++;
		if (counter == 5) {
			$.fn.fullpage.moveSectionUp()
			counter = 0;
		};
		
	});

	$('#another').on('motion', function(){
		console.log('---------derecha');
		$( 'body' ).css( "background-color", "green" );
		counter++;
		console.log(counter);
		if (counter == 5) {
			$.fn.fullpage.moveSectionDown();
			counter = 0;
		};
	});



	

	





})();
