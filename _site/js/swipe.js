var currentVal = 0;
var numberOfPics = 4;
var autoSwipe = setInterval(function () {
    turnRight();
}, 8000);
var turnOnAutoSwipe = null;
function controlAutoSwipe() {
    try {
        clearInterval(autoSwipe);
        clearTimeout(turnOnAutoSwipe);
    } catch (error) { }
    turnOnAutoSwipe = setTimeout(function () {
        autoSwipe = setInterval(function () {
            turnRight();
        }, 8000);
    }, 4000);
}
function leftClick() {
    turnLeft();
    controlAutoSwipe();
}
function rightClick() {
    turnRight();
    controlAutoSwipe();
}
function turnLeft() {
    var panel = document.getElementById("panel");
    var dotSelected = document.getElementById("dot" + currentVal.toString());
    dotSelected.className = "dot";
    currentVal -= 1;
    if (currentVal < 0) currentVal += numberOfPics;
    panel.style.transform = "translateX(-" + currentVal.toString() + "00%)";
    var dotWillSelected = document.getElementById("dot" + currentVal.toString());
    dotWillSelected.className = "dot-selected";
}
function turnRight() {
    var panel = document.getElementById("panel");
    var dotSelected = document.getElementById("dot" + currentVal.toString());
    dotSelected.className = "dot";
    currentVal += 1;
    if (currentVal >= numberOfPics) currentVal = 0;
    panel.style.transform = "translateX(-" + currentVal.toString() + "00%)";
    var dotWillSelected = document.getElementById("dot" + currentVal.toString());
    dotWillSelected.className = "dot-selected";
}
function gotoPage(page) {
    controlAutoSwipe();
    var panel = document.getElementById("panel");
    var dotSelected = document.getElementById("dot" + currentVal.toString());
    dotSelected.className = "dot";
    currentVal = page;
    panel.style.transform = "translateX(-" + currentVal.toString() + "00%)";
    var dotWillSelected = document.getElementById("dot" + currentVal.toString());
    dotWillSelected.className = "dot-selected";
}