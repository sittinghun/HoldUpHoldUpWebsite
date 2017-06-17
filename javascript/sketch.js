function setup() {
    var wWidth = window.innerWidth;
    var wHeight = window.innerHeight;
    createCanvas(wWidth, wHeight);
};

var i = 0.1;
var hovering = true;

function draw() {

    $('canvas').mouseenter(function () {
        hovering = true;
    })
    $('canvas').mouseleave(function () {
        hovering = false;
    })

    function counter() {
        if (i >= 0 && i < 5 && hovering === true) {
            i = i + 0.05;
            console.log('color');
        } else if (hovering === false) {
            i = 6;
            console.log('white');
        } else {
            i = 0;
            console.log('reset');
        }
        return i
    }

    if (mouseX, mouseY) {
        var rainbow = [[255, 102, 102], [255, 102, 153], [255, 102, 204], [255, 102, 255], [204, 102, 255], [153, 204, 255], [256, 256, 256]];
        var c = color(rainbow[Math.round(counter())]);

        fill(c);
        stroke(70);
        ellipse(mouseX, mouseY, 100, 100);
    } else {
        null;
    }
};
