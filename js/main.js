$(function(){
	$(window).resize(function(){
		win_h = $(window).height();
		$(".page").css({height:win_h,});
	}).resize();
	
	$(".page").mousewheel(function(e, delta){
		if(delta>0){
			m = $(this).prev().offset().top;
			$("html, body").stop().animate({scrollTop:m},800);
		} else { 
			m = $(this).next().offset().top;
			$("html, body").stop().animate({scrollTop:m},800);
		}
		return false;
	});
	
	// 새로고침 했을 때 스크롤 맨 위로
	$("html, body").animate({scrollTop:0}, 500);
	
	// 스크롤시 애니메이션 효과
	$(window).scroll(function(){
		var abc=$(window).scrollTop();
		console.log(abc);
		if(abc==win_h*0){
			$(".dot li i").animate({color:"#ccc"});
			$(".dot li i").css({transform:"scale(1)", cursor:"pointer"});
			$(".dot li:nth-child(1) i").animate({color:"#617590"});
			$(".dot li:nth-child(1) i").css({cursor:"default", transform:"scale(1.2)", transition:"all 0.5s"});
		} if(abc==win_h*1) {
			$("#page2>img").animate({opacity:"1", top:"200"}, 3000, "easeOutBounce")
			$("#page2 .brand .size").animate({opacity:"1"},800);
			
			$(".dot li i").animate({color:"#ccc"});
			$(".dot li i").css({transform:"scale(1)", cursor:"pointer"});
			$(".dot li:nth-child(2) i").animate({color:"#617590"});
			$(".dot li:nth-child(2) i").css({cursor:"default", transform:"scale(1.2)", transition:"all 0.5s"});
		} if(abc==win_h*2) {
			$(".rule1").delay(100).animate({opacity:"1"},1000);
			$(".rule2").delay(300).animate({opacity:"1"},1000);
			$(".rule3").delay(500).animate({opacity:"1"},1000);
			$(".rule4").delay(700).animate({opacity:"1"},1000);
			$(".rule5").delay(900).animate({opacity:"1"},1000);
			$(".rule6").delay(1100).animate({opacity:"1"},1000);
			$(".rule7").delay(1300).animate({opacity:"1"},1000);
			$(".rule8").delay(1500).animate({opacity:"1"},1000);
			
			$(".dot li i").animate({color:"#ccc"});
			$(".dot li i").css({transform:"scale(1)", cursor:"pointer"});
			$(".dot li:nth-child(3) i").animate({color:"#617590"});
			$(".dot li:nth-child(3) i").css({cursor:"default", transform:"scale(1.2)", transition:"all 0.5s"});
		} if(abc==win_h*3){
			$("#page4 .border").fadeIn(1500);
			
			$(".dot li i").animate({color:"#ccc"});
			$(".dot li i").css({transform:"scale(1)", cursor:"pointer"});
			$(".dot li:nth-child(4) i").animate({color:"#617590"});
			$(".dot li:nth-child(4) i").css({cursor:"default", transform:"scale(1.2)", transition:"all 0.5s"});
		} if(abc==win_h*4){
			$(".dot li i").animate({color:"#ccc"});
			$(".dot li i").css({transform:"scale(1)", cursor:"pointer"});
			$(".dot li:nth-child(5) i").animate({color:"#617590"});
			$(".dot li:nth-child(5) i").css({cursor:"default", transform:"scale(1.2)", transition:"all 0.5s"});
		}
	});
	
	// 슬라이드버튼
	$(".dot i").click(function(e){
		e.preventDefault();
		$(this).animate({color:"#617590"},500);
		$(this).css({cursor:"default", transform:"scale(1.2)", transition:"all 0.8s"});
		$(this).parents("li").siblings().find("i").animate({color:"#ccc"},500);
		$(this).parents("li").siblings().find("i").css({transform:"scale(1)", cursor:"pointer"});
		n = $(this).parents("li").index();
		$("html, body").animate({scrollTop:n*win_h}, 700);
	});
	
	// 스크롤과 화면 활성화
	
	
	// #page1 메뉴
	$(".menu li a").mouseover(function(){
		$(".menu li a").next().stop().slideDown(500);
		$(".menuBack").stop().slideDown(500);
	});

	$(".menu li a").mouseout(function(){
		$(".menu li a").next().stop().slideUp(500);
		$(".menuBack").stop().slideUp(500);
	});
	
	// #page4 best 버튼
	$("#page4 .prev, #page4 .next").mouseover(function(){
		$(this).animate({color:"#617590"},500);
	});
	
	$("#page4 .prev, #page4 .next").mouseleave(function(){
		$(this).animate({color:"#ccc"},500);
	});
	
	// #page4 best 슬라이드
	$(".best li").each(function(aa){
		$(this).css({left:aa*280});
	});
	
	$("#page4 .prev").click(function(){
		var left=parseInt($(".best").css("left"));
		if(left>=0){
			return;
		}
		console.log(left);
		var move=left+280;
		$(".best").animate({left:move},500)
	});
	
	$("#page4 .next").click(function(){
		var left=parseInt($(".best").css("left"));
		if(left<=-1000){
			return;
		}
		console.log(left);
		var move=left-280;
		$(".best").animate({left:move},500);
	});
	
	// #page4 마우스 오버
	$(".best li").mouseenter(function(){
		$(this).children().find("img").css({transform:"scale(1.05)", transition:"0.8s"});
	});
	$(".best li").mouseleave(function(){
		$(this).children().find("img").css({transform:"scale(1)"});
	});
	
	// #page5 snsicon 마우스 오버
	$(".snsicon li:nth-child(1) img").hover(function(){ 
        $(this).attr('src','images/sns1-1.png');
    }, function(){ 
        $(this).attr('src','images/sns1.png');
    }); 
	
	$(".snsicon li:nth-child(2) img").hover(function(){ 
        $(this).attr('src','images/sns2-1.png'); 
    }, function(){ 
        $(this).attr('src','images/sns2.png'); 
    }); 
	
	$(".snsicon li:nth-child(3) img").hover(function(){ 
        $(this).attr('src','images/sns3-1.png'); 
    }, function(){ 
        $(this).attr('src','images/sns3.png'); 
    }); 
	
	$(".snsicon li:nth-child(4) img").hover(function(){ 
        $(this).attr('src','images/sns4-1.png'); 
    }, function(){ 
        $(this).attr('src','images/sns4.png'); 
    }); 
	
	$(".snsicon li:nth-child(5) img").hover(function(){ 
        $(this).attr('src','images/sns5-1.png'); 
    }, function(){ 
        $(this).attr('src','images/sns5.png'); 
    }); 
	
	// #page5 box 마우스오버
	$(".box li a").mouseenter(function(){
		$(this).parent("li").animate({backgroundColor:"#a4bbd8"},700);
	});
	
	$(".box li a").mouseleave(function(){
		$(this).parent("li").animate({backgroundColor:"#617590"},500);
	});
});