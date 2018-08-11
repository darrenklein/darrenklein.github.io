function scroll(target){
    $("html, body").animate({
        scrollTop: $(target).offset().top-160
    }, 1000)
}

$(".about_button").click(function() {
    scroll("#about")
})

$(".projects_button").click(function() {
    scroll("#projects")
})

$(".press_button").click(function() {
    scroll("#press")
})

$(".contact_button").click(function() {
    scroll("#contact")
})

// When closing a modal, stop a Youtube video from playing.
$("[data-reveal]").on("closed.zf.reveal", function() {
    $(".youtube_player_iframe").each(function() {
        this.contentWindow.postMessage("{\"event\": \"command\", \"func\": \"stopVideo\", \"args\": \"\"}", "*")
    })
})
