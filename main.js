$('#menu').on('click', function () {
    $('.links.col').slideToggle(600);
    $('.links.col').css('display', 'flex');
});

$('.links a').on('click', function () {
    $('.links a').removeClass('active');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $(this).addClass('active')
    }
    if ($('.links.col').css('display') == 'flex') $('.links').slideUp('slow');
});

$(window).resize(function () {
    if ($(window).outerWidth() >= 900) {
        $(".links").css("display", "block")
    } else {
        $(".links").css("display", "none")
    }
});