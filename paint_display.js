function paint_display() {

    var canvasX = document.getElementById("canvasx");
    var ctx = canvasX.getContext("2d");
    var generation_label = document.getElementById("generation");
    generation_label.innerHTML = states.generation;

    border_width = 2;
    var myScreenWidth = states.canvas_size - 2 * border_width;
    var squareSide = myScreenWidth / states.grid_size_current;
    var squareSide1 = squareSide - 1;

    function drawCell(x, y) {
        var startX = Math.floor(x * squareSide + border_width);
        var startY = Math.floor(y * squareSide + border_width);

        var cc = states.grid.cell(x, y).cell_color();

        var t = 'rgba(' + cc[0] + ',' + cc[1] + ',' + cc[2] + ', 255)';

        ctx.beginPath();
        ctx.fillStyle = t;
        ctx.fillRect(startX, startY, squareSide1, squareSide1);
        ctx.stroke();
        a = 1;

    }

    function drawRow(y) {
        for (x = 0; x < states.grid_size_current; x++) {
            drawCell(x, y);
        }
    }

    // draw raw graphics pattern
    function drawCanvas1() {
        for (y = 0; y < states.grid_size_current; y++) {
            drawRow(y);
        }
    }

    function clearCanvas() {
        ctx.clearRect(border_width, border_width, border_width,
            canvasX.width - 2 * border_width, canvasX.height - 2 * border_width);
        canvasX.width = 500;
        canvasX.height = 500;
    }

    clearCanvas();
    drawCanvas1();
}

function paint_display_overlay(centers) {
    var canvasX = document.getElementById("canvasx");
    var ctx = canvasX.getContext("2d");

    border_width = 2;
    var myScreenWidth = states.canvas_size - 2 * border_width;
    var squareSide = myScreenWidth / states.grid_size_current;

    var colors = states.colors_patterns[states.color_group];
    for (i = 0; i < centers.length; i++) {
        var cc = colors[i];
        var t = 'rgba(' + cc[0] + ',' + cc[1] + ',' + cc[2] + ',255)';
        var tw = 'rgba(200,200,200,255)';


        var x = centers[i].x * squareSide + border_width;
        var y = centers[i].y * squareSide + border_width;
        var r = centers[i].r * squareSide;
        var r2 = Math.max(0, r - 1);
        ctx.beginPath();
        ctx.strokeStyle = tw;
        ctx.lineWidth = 5;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = t;
        ctx.lineWidth = 3;
        ctx.arc(x, y, r2, 0, 2 * Math.PI);

        ctx.stroke();
        ctx.lineWidth = 1;
    }


}