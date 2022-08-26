$(document).ready(function() {

    $(".menu").click(function() {
        $(".hidden-menu").toggle("slow");
    });

    if ($(document).width() < 768) {
        $(".hidden-menu").toggle();
    }

});