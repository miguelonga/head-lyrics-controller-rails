(function(){
	var counter = 0;
	var counter2 = 0;
	var counter2_back = 3;
	var counter_back = 2;

	$('#one').on('motion', function(){
		counter2++;
		if (counter2 == 5 || counter2 == 10 || counter2 == 15) {counter2_back--};
		if (counter2 == 15) {
			$.fn.fullpage.moveSectionUp()
			counter2 = 0;
			counter2_back = 3;
		};
		document.querySelector('.counter2').innerHTML = counter2_back;
		console.log(counter2_back);
		
	});

	$('#another').on('motion', function(){
		counter++;
		if (counter == 5 || counter == 10) {counter_back--};
		if (counter == 10) {
			$.fn.fullpage.moveSectionDown();
			counter = 0;
			counter_back = 2;
		};
		document.querySelector('.counter').innerHTML = counter_back;

	});

})();
