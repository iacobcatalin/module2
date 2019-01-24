document.addEventListener("DOMContentLoaded", start);

var parentDiv;
var n = 6;
var m = 6;
var sideWidth = 20;
var elementSpace = 20;

function start() {
    createDivElements();
}

function createDivElements() {
    parentDiv = document.createElement("div");
    parentDiv.className = "parent-div";
    parentDiv.style.width = ((sideWidth + elementSpace) * n) + "px";
    parentDiv.style.height = ((sideWidth + elementSpace) * n) + "px";
    document.body.appendChild(parentDiv);

    var cx = 100;
    var cy = 100;
    var r = 150;
    var div;
    var x;
    var y;
    var fi = 0;
    var pas = (2* Math.PI) /(n * m);

    for (var i = 0; i < n; i++) {
  
        for (var j = 0; j < m; j++) {
            div = document.createElement("div");
            // div.style.width = sideWidth + "px";
            // div.style.height = sideWidth + "px";
            div.style.marginRight = sideWidth + "px";
            div.style.marginBottom = sideWidth + "px";

            div.style.position = "absolute";
            y = cy + Math.sin(fi)*r;
            x = cx + Math.cos(fi)*r;
            fi += pas;

            div.style.top = y + "px";
            div.style.left = x + "px";
            

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
