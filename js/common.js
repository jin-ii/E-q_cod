//nav slide menu
$(function(){
    
    const $naviWrap = $('#navi_wrap');    
    // always-open-menu 클래스가 존재하는지 확인
    const isAlwaysOpenMenu = $('body').hasClass('always-open-menu') || $naviWrap.hasClass('always-open-menu');
    
    // always-open-menu 클래스가 있으면 메뉴를 고정 상태로 설정
    if (isAlwaysOpenMenu && !$naviWrap.hasClass('fixed-open')) {
        $naviWrap.addClass('fixed-open expanded');
    }
    
    // 메뉴 초기화 함수
    function resetMenus() {
        $('.nav_menu .depth1 > a').removeClass('active');
        $('.depth2, .depth3').slideUp(300);
        $('.nav_menu .depth2 li > a').removeClass('active');
    }

  // hover 이벤트
    $naviWrap.hover(
        function() {
            if(!$(this).hasClass('fixed-open')) {
                $(this).addClass('expanded');
            }
        },
        function() {
            if(!$(this).hasClass('fixed-open')) {
                $(this).removeClass('expanded');
                resetMenus();
            }
        }
    );

    
     // depth1 메뉴 클릭 이벤트
     $('.nav_menu .depth1 > a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // always-open-menu 클래스가 없을 때만 fixed-open 클래스 토글
        if (!isAlwaysOpenMenu) {
            $naviWrap.addClass('fixed-open expanded');
        }
        
        const $this = $(this);
        const $depth2 = $this.siblings('.depth2');
        
        if (!$this.hasClass('active')) {
            $('.nav_menu .depth1 > a').removeClass('active');
            $('.depth2').not($depth2).slideUp(300);
        }
        
        $this.toggleClass('active');
        $depth2.slideToggle(300);
    });


    // depth2 메뉴 클릭 이벤트
    $('.nav_menu .depth2 li > a').click(function(e) {
        e.preventDefault();
        const $this = $(this);
        const $depth3 = $this.siblings('.depth3');
        
        if ($depth3.length) {
            // 다른 depth2의 depth3 메뉴 닫기
            if (!$this.hasClass('active')) {
                $('.nav_menu .depth2 li > a').removeClass('active');
                $('.depth3').not($depth3).slideUp(300);
            }
            
            // 현재 depth3 토글
            $this.toggleClass('active');
            $depth3.slideToggle(300);
        }
    });
   
     // 외부 클릭시 메뉴 초기화 (메뉴 접기만 해당)
    $(document).click(function(e) {
        if (!$(e.target).closest('#navi_wrap').length) {
            $naviWrap.removeClass('expanded');
            resetMenus();
        }
    });

      // 외부 영역 클릭 시 메뉴 닫기 (always-open-menu 클래스가 없는 경우에만)
    $(document).click(function(e) {
        // always-open-menu 클래스가 없는 경우에만 fixed-open 클래스 제거
        if (!$(e.target).closest('#navi_wrap').length && !isAlwaysOpenMenu) {
            $naviWrap.removeClass('fixed-open expanded');
            resetMenus();
        }
    });

    // 메뉴 영역 클릭 시 이벤트 전파 중지
    $naviWrap.click(function(e) {
        e.stopPropagation();
    });
    

    

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


