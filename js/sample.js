(function(){
	var counter = 0;
	var counter2 = 0;

	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	$('#one').on('motion', function(){
		console.log('izquierda---------')
		$( 'body' ).css( "background-color", "orange" );
		counter2++;
		if (counter2 == 9) {
			$.fn.fullpage.moveSectionUp()
			counter2 = 0;
		};
		document.querySelector('.counter2').innerHTML = counter2;
		
	});

	$('#another').on('motion', function(){
		console.log('---------derecha');
		$( 'body' ).css( "background-color", "green" );
		counter++;
		console.log(counter);
		if (counter == 9) {
			$.fn.fullpage.moveSectionDown();
			counter = 0;
		};
		document.querySelector('.counter').innerHTML = counter;

	});





	

	





})();
