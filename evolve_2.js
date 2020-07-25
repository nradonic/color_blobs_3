function generateNewGeneration() {
    let y_index = 0;
    let x_index = 1;
    let count_index = 2;
    let radius_index = 3;

    var grid_new = new Grid(states.grid_size_current);
    var color_list = states.colors_patterns[states.color_group];
    if (!states.mean_centers) {
        states.mean_centers = mean_x_y(states.grid, color_list);
    }

    push_away(states.mean_centers, states.grid_size_current);
    return states.mean_centers;

    function mean_x_y(gridM, colorsM) {
        var results = [];
        for (i = 0; i < colorsM.length; i++) {
            results.push(average_coordinates());
        }
        return results;

        function average_coordinates() {
            var x = 0;
            var y = 0;
            var count = 0;
            let grid_size = gridM.rows;
            for (row = 0; row < grid_size; row++) {
                for (col = 0; col < grid_size; col++) {
                    var k = gridM.cell(row, col).cell_color()[3];
                    if (i === k) {
                        x += col;
                        y += row;
                        count++;
                    }
                }
            }
            if (count !== 0) {
                y = y / count;
                x = x / count;
            }

            var radius = Math.sqrt(count) / 2;
            var min_y = radius;
            var max_y = grid_size - radius;
            var min_x = radius;
            var max_x = grid_size - radius;

            return {
                min_y: min_y,
                max_y: max_y,
                min_x: min_x,
                max_x: max_x,
                y: y,
                x: x,
                r: radius
            };
        }
    }

    function push_away(centers, grid_size) {
        for (i = 0; i < centers.length; i++) {
            for (j = 0; j < centers.length; j++) {
                if (i !== j) {
                    push_two(centers[i], centers[j]);
                }
            }
        }
        a = 1;
    }

    function push_two(ci, cj) {
        var delta_y = ci.y - cj.y;
        var delta_x = ci.x - cj.x;
        var r = Math.sqrt(delta_y * delta_y + delta_x * delta_x);
        var fix = r - ci.r - cj.r;
        var dx = fix * delta_x / r;
        var dy = fix * delta_y / r;
        if (fix > 0) { return; }
        ci.x -= dx / 2;
        ci.x = Math.min(ci.max_x, ci.x);
        ci.x = Math.max(ci.min_x, ci.x);
        cj.x += dx / 2;
        cj.x = Math.min(cj.max_x, cj.x);
        cj.x = Math.max(cj.min_x, cj.x);

        ci.y -= dy / 2;
        ci.y = Math.min(ci.max_y, ci.y);
        ci.y = Math.max(ci.min_y, ci.y);
        cj.y += dy / 2;
        cj.y = Math.min(cj.max_y, cj.y);
        cj.y = Math.max(cj.min_y, cj.y);

        a = 1;
    }
}