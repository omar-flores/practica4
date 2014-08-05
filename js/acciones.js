//JavaScript
	var audio;
	
$(document).ready(function(e){
	if (windows.plugins && windows.plugins.lowlatencyAudio)
	audio=windows.plugins.lowlatencyAudio;
	audio.preoladFX('mario','audio/mario.mp3',function(msg){},function(msg){alert('error:' +msg);} );
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
	audio.play('mario')
});//click continuar fecha
});//ready