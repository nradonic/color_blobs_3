function distance_to_mean(cell) {
    // cell = {x:x, y:y, index:index}
    var result = 0;
    var index = cell.cell_color();

    var dx = cell.x - mean_centers[index].x;
    var dy = cell.y - mean_centers[index].y;
    var result = Math.sqrt(dy * dy + dx * dx);
    return result;
}