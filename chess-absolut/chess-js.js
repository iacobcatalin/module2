document.addEventListener("DOMContentLoaded", start);

var parentDiv;
var n = 15;
var m = 15;
var sideWidth = 10;
var elementSpace = 10;

function start() {
    createDivElements();
}

function createDivElements() {
    parentDiv = document.createElement("div");
    parentDiv.className = "parent-div";
    parentDiv.style.width = ((sideWidth + elementSpace) * n) + "px";
    parentDiv.style.height = ((sideWidth + elementSpace) * n) + "px";
    document.body.appendChild(parentDiv);

    var x = 0;
    var y = 0;
    var div;

    for (var i = 0; i < n; i++) {
        y += elementSpace + sideWidth;
        x = 0;
        for (var j = 0; j < m; j++) {
            div = document.createElement("div");
            div.style.width = sideWidth + "px";
            div.style.height = sideWidth + "px";
            div.style.marginRight = sideWidth + "px";
            div.style.marginBottom = sideWidth + "px";

            div.style.position = "absolute";
            div.style.top = y + "px";
            div.style.left = x + "px";
            x += elementSpace + sideWidth;

            if (i == j) {
                div.className = "black";
            }
            if (i == n - j - 1) {
                div.className = "white";
            }
            parentDiv.appendChild(div);
        }
    }
}
