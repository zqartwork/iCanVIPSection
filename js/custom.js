// 滾輪至上方

$(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
        $("a[href='#top']").css({
            "opacity": ".5",
            'cursor': 'pointer',
            'z-index': '3',
        });

    } else {
        $("a[href='#top']").css({
            "opacity": "0",
            'cursor': 'default',
            'z-index': '-5',
        });
    }
})

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$("a[href='#Act']").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Act").offset().top
    }, 'slow');
});
$("a[href='#Feature']").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#Feature").offset().top
    }, 'slow');
});