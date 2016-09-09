function scroll(target){
    $('html, body').animate({
        scrollTop: $(target).offset().top-160
    }, 1000);
};

$("#about_button").click(function() {
    scroll("#about");
});

$("#projects_button").click(function() {
    scroll("#projects");
});

$("#press_button").click(function() {
    scroll("#press");
});

$("#contact_button").click(function() {
    scroll("#contact");
});