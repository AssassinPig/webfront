// JavaScript Document

$(function(){

		$(".populate_dlg").hide();
		$(".tanchu_dlg").hide();


		$(".header_list_elem").click(function(){
			                             
			                            $(".tanchu_dlg").fadeIn(800);
			                            $(".tanchu_dlg_child").show(800);

			                            $(".populate_dlg").show(800)
			                            $(".populate_dlg_child").animate({opacity:'1'},2100)
			                           
			                           })

        $(".populate_dlg_child span").click(function(){

			                            $(".populate_dlg_child").animate({opacity:'0'})	     
			                            $(".populate_dlg").hide(600)
			                            $(".tanchu_dlg").fadeOut(600)

			                           })	
	})
	