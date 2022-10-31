$(document).ready(function() {
	$(".circle").hover(function(e) {
		var audioName = $(e.target).attr("id") + "-audio";
		var audio = $("#" + audioName)[0];
		audio.play();
	});
	$(".circle").mouseleave(function(e) {
		var audioName = $(e.target).attr("id") + "-audio";
		var audio = $("#" + audioName)[0];
		audio.pause();
		audio.currentTime = 0;
	});
});