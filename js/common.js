//nav slide menu
$(function(){

    const menuItem = $(".nav_menu .depth1 .menu_item");
    const navbar = $(".navbar");
    const depth2Menu = $(".depth2");
    
    // 초기 상태 설정 - 페이지 로드 시 depth2 메뉴 숨김
    depth2Menu.hide();
    
    // 메뉴 접힘/펼침 상태 체크
    let isExpanded = false;
    
    // #navi_wrap이 있는 경우 (dashboard1-4.html)
    if ($("#navi_wrap").length) {
        navbar.hover(
            function() {
                isExpanded = true;
            },
            function() {
                isExpanded = false;
                // 메뉴가 접힐 때 모든 active 상태와 depth2 메뉴 초기화
                menuItem.removeClass("active");
                depth2Menu.stop().slideUp();
            }
        );
        
        menuItem.click(function(e) {
            e.preventDefault();
            
            // 펼쳐진 상태에서만 메뉴 동작
            if(isExpanded) {
                toggleDepth2Menu($(this));
            }
        });
    } 
    // .navbar만 있는 경우 (sub_new1.html)
    else {
        menuItem.click(function(e) {
            e.preventDefault();
            toggleDepth2Menu($(this));
        });
    }

    // depth2 메뉴 토글 함수
    function toggleDepth2Menu($clickedItem) {
        if($clickedItem.hasClass("active")) {
            $clickedItem.removeClass("active");
            $clickedItem.next(".depth2").stop().slideUp();
        } else {
            menuItem.removeClass("active");
            depth2Menu.stop().slideUp();
            $clickedItem.addClass("active");
            if($clickedItem.next(".depth2").length > 0) {
                $clickedItem.next(".depth2").stop().slideDown();
            }
        }
    }

    // 좌측 영역 접기/펼치기
    $('.btn_fold_left').click(function(e){
        e.preventDefault();
        $('.left_list').toggleClass('fold');
        $(this).toggleClass('fold');
    });

    $('.btn_fold_right').click(function(e){
        e.preventDefault();
        $('.right_list').toggleClass('fold');
        $(this).toggleClass('fold');
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


