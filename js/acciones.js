//JavaScript
	
$(document).ready(function(e){
	
	$('#Beep').click(
function(e){
	navigator.notification.beep(1);
});//click continuar fecha
	$('#Vibrar').click(
function(e){
	navigator.notification.vibrate(1000);
});//click continuar fecha
	$('#play').click(
function(e){
	navigator.notification.play(1000);
});//click continuar fecha
});//ready