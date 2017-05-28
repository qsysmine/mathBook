(function() {
    $('html').keydown(function(e) {
        if (e.keyCode == 13) {
            var pageNumber = $('#pageNumberInput').val();
            var $frame = $('#frame');
            var baseURL = "http://boxcarchallenge.com/BookPages/page_%s.pdf";
            $frame.attr('src', baseURL.replace("%s", pageNumber));
        }
    });
})();
