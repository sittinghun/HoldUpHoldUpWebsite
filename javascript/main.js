$(document).ready(function () {

    $(window).resize(function () {
        location.reload();
    })

    $('#pause').hide();

    var song = document.getElementById('forbiddenGreens')

    $('#play').click(function () {
        $(this).hide();
        $('#pause').show();
        song.play();
    });

    $('#pause').click(function () {
        $(this).hide();
        $('#play').show();
        song.pause();
    });

});
