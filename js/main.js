$(document).ready(function() {

    $(".menu").click(function() {
        if(window.scrollY < 60){
            $(".hidden-menu").toggle("slow");
        }
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    });

    if ($(document).width() < 768) {
        $(".hidden-menu").toggle();
    }


    window.addEventListener("scroll", function(){
        if(window.scrollY > 60){
            $(".menu").attr('src', 'images/up.png');
        } else {
            $(".menu").attr('src', 'images/hamburguer.png');
        }
    });

});