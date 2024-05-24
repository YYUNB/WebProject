var canvas, context;
function init() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    context.lineWidth = 2;
    context.strokeStyle = "#34495e";

    canvas.addEventListener("mousemove", function (event) {
        move(e)
    }, false);
    canvas.addEventListener("mousedown", function (event) {
        down(e)
    }, false);
    canvas.addEventListener("mouseup", function (event) {
        up(e)
    }, false);
    canvas.addEventListener("mouseout", function (event) {
        out(e)
    }, false);
}

var startX = 0, startY = 0;
var drawing = false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}

function down(e) {
    startX=e.offsetX; startY=e.offsetY;
    drawing = true;
}

function up(e) {drawing=false;}
function move(e) {
    if(!drawing) return;
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) {drawing=false;}

// 왜 안되닝