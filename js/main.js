$(document).ready(function(){
	$(window).on("scroll",function(){
  	var wn = $(window).scrollTop();
    if(wn > 50){
    	$(".navbar").css("background","rgba(1,1,1,1)");
        $(".nav-item").css("color","white");
        $(".navbar-brand").css("color","white");
    }
    else{
    	$(".navbar").css("background","transparent");
        $(".nav-item").css("color"," rgba(0,0,0,.5)");
        $(".navbar-brand").css("color"," rgba(1,1,1,1)");
    }
  });
});