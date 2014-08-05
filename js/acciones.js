//JavaScript
	
$(document).ready(function(e){
	
	$('#Beep').click(
function(e){
	navigator.notification.Beep(1);
});//click continuar fecha
	$('#Vibrar').click(
function(e){
	navigator.notification.vibrate(1000);
});//click continuar fecha
});//ready