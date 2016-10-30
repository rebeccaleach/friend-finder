// code dump



$(document).ready(function(){

	var name;
	var picture;
	var q1;
	var q2;
	var q3;

	$('#button').on('click', function() {
		name = $('#name').val().trim();
		q1 = $('#q1').val().trim();
		console.log(name);
		console.log(q1);
	});


});