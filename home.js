$(document).ready(function() {

	//VARKEN
	var varken = $("#varken-audio")[0];
	$("#varken").mouseenter(function() {
		varken.play();
	});
	$("#varken").mouseleave(function() {
		varken.pause();
		varken.currentTime = 0;
	})


});