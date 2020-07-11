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