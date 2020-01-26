$(document).ready(() => {
    $(".menu-item").click(() => {
        $(".menu-item").removeClass("active-side");
        $(this).addClass("active-side");
    });
});
