function scroll(target){
    $('html, body').animate({
        scrollTop: $(target).offset().top-170
    }, 1000);
};

$("#about_button").click(function() {
    scroll("#about");
});

$("#projects_button").click(function() {
    scroll("#projects");
});

$("#contact_button").click(function() {
    scroll("#contact");
});