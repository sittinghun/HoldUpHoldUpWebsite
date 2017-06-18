$(document).ready(function () {

    //The Play and Pause Buttons

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

    //Responsive Canvas for p5

    $(window).resize(function () {
        location.reload();
    })
});
