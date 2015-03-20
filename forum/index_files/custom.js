$(document).ready(function(){
	$('body > div.main > div > div.topic_bar > div > ul > li').each(function(index){
		if(index%4==0){
			$(this).children(':first-child').css('background-color', 'red');
		}
		if(index%4==1){
			$(this).children(':first-child').css('background-color', 'blue');
		}
		if(index%4==2){
			$(this).children(':first-child').css('background-color', 'yellow');
		}
		if(index%4==3){
			$(this).children(':first-child').css('background-color', 'green');
		}
	});
});