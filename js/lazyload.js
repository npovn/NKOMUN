function lazyload(id) {
    if ($("#" + id).attr('loaded')) {
        return;
    }
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    if ($(window).scrollTop() + height >= $("#" + id).offset().top) {
        $("#" + id).attr('loaded', true);
        var ele = document.getElementById(id);
        setTimeout(() => {
            ele.style.transform = "translateY(0)";
            ele.style.opacity = "1";
        }, 100);
        console.log("effect");
    }
}