$(document).ready(function(){
	$('.topic_bar > div > ul > li').each(function(index){
		if(index%4==0){
			$(this).children(':first-child').css('background-color', '#DBFF15');
		}
		if(index%4==1){
			$(this).children(':first-child').css('background-color', '#E89426');
		}
		if(index%4==2){
			$(this).children(':first-child').css('background-color', '#FF1247');
		}
		if(index%4==3){
			$(this).children(':first-child').css('background-color', '#19FFCD');
		}
	});
});