//nav slide menu
$(function(){

    // 상위 메뉴 클릭시 하위 메뉴 오픈
    const menuItem = $(".menu_item");
    menuItem.click(function(e) {
        e.preventDefault()
        $(".depth2").stop().slideUp();
        menuItem.removeClass("active")

        $(this).addClass("active");
        $(this).next().stop().slideDown();

    });

    //탭메뉴
    $(".tab_type1 > ul > li > a").click(function(e) {

		var tab_idx = $(".tab_type1 > ul > li > a").index($(this));
		$(".tab_type1 > ul > li > a").removeClass("on");
		$(".tab_type1 > ul > li > a").eq(tab_idx).addClass("on");
		
		$(".pop_con_list").hide();
		$(".pop_con_list").eq(tab_idx).show();
		return false;
	});



});


