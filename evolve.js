function swap_random_pairs() {

    function distance_to_mean(cell) {
        // cell = {x:x, y:y, cell:cell}
        var result = 0;
        var index = cell.cell.cell_color()[3];

        var dx = cell.x - mean_centers[index].x;
        var dy = cell.y - mean_centers[index].y;
        var result = Math.sqrt(dy * dy + dx * dx);
        return result;
    }



    function random_cell() {
        var x = rand_size(states.grid_size_current);
        var y = rand_size(states.grid_size_current);
        var cell = states.grid.cell(x, y);
        var index = cell.cell_color()[3];

        return { x: x, y: y, cell: cell };
    }

    function rand_size(size) {
        return Math.floor(Math.random() * size)
    }

    function diff(cell1, cell2) {
        return distance_to_mean(cell1) - distance_to_mean(cell2);
    }

    function generate_cells() {
        var cell1 = random_cell();
        // var cell2 = //neighbor to cell1
    }

    // loop 1 or more times to generate 2 cells, and calculate difference
    // if favorable swap the colors for the two cells

    var c1 = random_cell();
    var d1 = distance_to_mean(c1);

    var a = 1;
}