$(function () {
    /*"menu-btn" é o seletor ou classe */ $(".menu-btn").click(() => {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    $(".navbar .menu li a").click(() => {
        $("html").css("scrollBehavior", "smooth");
    });
});
