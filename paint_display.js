function paint_display(generation) {

    var display = new Grid(grid_size_current, grid_size_current);
    var canvasX = document.getElementById("canvasx");
    var run = document.getElementById("run");
    var generation_label = document.getElementById("generation");
    generation_label.innerHTML = generation;
    //setInterval(null, 1000);

}