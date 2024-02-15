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
});

