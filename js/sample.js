(function(){
	var counter = 0;
	var counter2 = 0;
	var counter2_back = 5;
	var counter_back = 5;

	$('.link').on('motion', function(ev, data){
		console.log('motion detected on a link to', data.spot.el.href);
	});

	$('#one').on('motion', function(){
		console.log('izquierda---------')
		$( 'body' ).css( "background-color", "orange" );
		counter2++;
		if (counter2 == 5) {counter2_back--};
		if (counter2 == 10) {counter2_back--};
		if (counter2 == 15) {counter2_back--};
		if (counter2 == 20) {counter2_back--};
		if (counter2 == 20) {
			$.fn.fullpage.moveSectionUp()
			counter2 = 0;
			counter2_back = 5;
		};
		document.querySelector('.counter2').innerHTML = counter2_back;
		console.log(counter2_back);
		
	});

	$('#another').on('motion', function(){
		console.log('---------derecha');
		$( 'body' ).css( "background-color", "green" );
		counter++;
		if (counter == 5) {counter_back--};
		if (counter == 10) {counter_back--};
		if (counter == 15) {counter_back--};
		if (counter == 20) {counter_back--};
		if (counter == 20) {
			$.fn.fullpage.moveSectionDown();
			counter = 0;
			counter_back = 5;
		};
		document.querySelector('.counter').innerHTML = counter_back;

	});

})();
