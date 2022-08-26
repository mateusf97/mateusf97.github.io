$(document).ready(function() {

    $(".menu").click(function() {
        if(window.scrollY < 60){
            $(".hidden-menu").slideToggle("slow");
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

    function idade(birth_year, birth_month, birth_day) {
        var d = new Date,
            current_year = d.getFullYear(),
            current_month = d.getMonth() + 1,
            current_day = d.getDate(),

    
            birth_year = +birth_year,
            birth_month = +birth_month,
            birth_day = +birth_day,
    
            age = current_year - birth_year;

            $("#year").text(current_year);

    
        if (current_month < birth_month || current_month == birth_month && current_day < birth_day) {
            age--;
        }
    
        return age < 0 ? 0 : age;
    }

    $("#Age").text(idade(1997, 12, 15));

});

