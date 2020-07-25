function swap_random_pairs() {

    function distance_to_mean(xy_and_cell) {
        // cell = {x:x, y:y, index:index}
        var result = 0;

        var dx = xy_and_cell.x - mean_centers[xy_and_cell.index].x;
        var dy = xy_and_cell.y - mean_centers[xy_and_cell.index].y;
        var result = Math.sqrt(dy * dy + dx * dx);
        return result;
    }



    function random_cell() {
        var x = rand_size(states.grid_size_current);
        var y = rand_size(states.grid_size_current);
        var cell = states.grid.cell(x, y);
        return { x: x, y: y, cell: cell };
    }

    function rand_size(size) {
        return Math.floor(Math.random() * size)
    }

    function rand_size_1_0_1() {
        return rand_size(3) - 1;
    }

    function diff_xy(x1, y1, x2, y2, index) {
        var temp1 = { x: x1, y: y1, index: index };
        var temp2 = { x: x2, y: y2, index: index };
        return distance_to_mean(temp1) - distance_to_mean(temp2);
    }

    function diffdiff(cell1, cell2) {
        var x1 = cell1.x;
        var y1 = cell1.y;
        var index1 = cell1.cell.cell_color()[3];
        var x2 = cell2.x;
        var y2 = cell2.y;
        var index2 = cell2.cell.cell_color()[3];

        var diff1 = diff_xy(x1, y1, x2, y2, index1);
        var diff2 = diff_xy(x2, y2, x1, y1, index2);
        return diff1 + diff2;
    }

    function generate_cells() {
        var cell1 = random_cell();
        // var cell2 = //neighbor to cell1
    }

    function get_neighbor_cell(c1) {
        var temp = { x: c1.x, y: c1.y, cell: c1.cell };
        var x = c1.x + rand_size_1_0_1();
        var y = c1.y + rand_size_1_0_1();

        if (x < 0 || x > states.grid_size_current || y < 0 || y > states.grid_size_current) {
            return temp;
        }

        var c2 = states.grid.cell(x, y);
        return { x: x, y: y, cell: c2 };
    }

    function swap_colors(c1, c2) {
        var temp = c1.cell.cell_color()[3];
        c1.cell.index = c2.cell.cell_color()[3];
        c2.cell.index = temp;
    }

    function check_for_swap(c1, c2) {
        var a = diffdiff(c1, c2);
        if (a > 0) {
            swap_colors(c1, c2);
        }
    }

    var c1 = random_cell();
    var c2 = get_neighbor_cell(c1);
    check_for_swap(c1, c2);
    c2 = get_neighbor_cell(c1);
    check_for_swap(c1, c2);

    var b = 1;
}