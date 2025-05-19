//nav slide menu
$(function(){

    const menuItem = $(".nav_menu .depth1 a");
    const navbar = $(".navbar");
    const depth2Menu = $(".depth2");
    const naviWrap = $("#navi_wrap");
    
    // 초기 상태 설정 - 페이지 로드 시 depth2 메뉴 숨김
    depth2Menu.hide();
    
    // 메뉴 접힘/펼침 상태 체크
    let isExpanded = false;
    let isMenuFixed = false; // 메뉴 고정 상태 추적
    
    // #navi_wrap이 있는 경우 (dashboard1-4.html)
    if (naviWrap.length) {
        naviWrap.hover(
            function() {
                isExpanded = true;
                // 호버 시 메뉴 펼침 (고정 상태가 아닐 때만)
                if (!isMenuFixed) {
                    naviWrap.addClass("hover-expanded");
                }
            },
            function() {
                isExpanded = false;
                // 메뉴가 고정되지 않은 경우에만 마우스가 떠날 때 메뉴 접기
                if (!isMenuFixed) {
                    naviWrap.removeClass("hover-expanded");
                    // 메뉴가 접힐 때 active 상태와 depth2 메뉴 초기화
                    // menuItem.removeClass("active");
                    depth2Menu.stop().slideUp();
                }
            }
        );
        
        // 메뉴 아이템 클릭 이벤트
        menuItem.click(function(e) {
            e.preventDefault();
            e.stopPropagation(); // 이벤트 버블링 방지
            
            const $this = $(this);
            
            // 메뉴 토글 및 고정 상태 관리
            if (!naviWrap.hasClass("fixed-open")) {
                // 메뉴가 고정되지 않은 상태에서 클릭 - 메뉴 확장 및 고정
                isMenuFixed = true;
                naviWrap.addClass("fixed-open");
                
                // 모든 메뉴 아이템의 active 상태 제거 후 현재 아이템만 active
                // menuItem.removeClass("active");
                depth2Menu.stop().slideUp();
                
                $this.addClass("active");
                if ($this.next(".depth2").length > 0) {
                    $this.next(".depth2").stop().slideDown();
                }
            } else {
                // 메뉴가 고정된 상태에서 클릭
                if ($this.hasClass("active")) {
                    // 이미 활성화된 메뉴 클릭 - 접기
                    $this.removeClass("active");
                    $this.next(".depth2").stop().slideUp();
                } else {
                    // 다른 메뉴 클릭 - 기존 메뉴 접고 새 메뉴 펼치기
                    menuItem.removeClass("active");
                    depth2Menu.stop().slideUp();
                    $this.addClass("active");
                    if ($this.next(".depth2").length > 0) {
                        $this.next(".depth2").stop().slideDown();
                    }
                }
            }
        });
        
        // 문서의 다른 부분 클릭 시 메뉴 접기
        $(document).click(function(e) {
            if (isMenuFixed && !$(e.target).closest('#navi_wrap').length) {
                isMenuFixed = false;
                naviWrap.removeClass("fixed-open");
                menuItem.removeClass("active");
                depth2Menu.stop().slideUp();
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


