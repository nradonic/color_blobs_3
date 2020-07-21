function generateNewGeneration2() {
    var grid_new = new Grid(states.grid_size_current);
    var color_list = states.colors_patterns[states.color_group];
    var centers = mean_x_y(states.grid, color_list);
    var attractors = extend_means_to_edges(centers, states.grid_size_current);

    grid_new = migrateColors(states.grid, color_list, states.grid_size_current, attractors);

    a = 1;

}

function mean_x_y(gridM, colorsM) {
    var results = [];
    for (i = 0; i < colorsM.length; i++) {
        var { y, x, count } = average_coordinates();
        results.push([y, x, count]);
    }
    return results;

    function average_coordinates() {
        var x = 0;
        var y = 0;
        var count = 0;
        for (row = 0; row < gridM.rows; row++) {
            for (col = 0; col < gridM.columns; col++) {
                if (matches3d(colorsM[i], gridM.cell(row, col).cell_color())) {
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
        return { y, x, count };
    }
}


function extend_means_to_edges(means, grid_size) {
    var results = [];
    for (i = 0; i < means.length; i++) {
        results.push(extend_vector(means[i], grid_size));
    }
    return results;
}

function extend_vector(xyc, grid_size) {
    var middle = grid_size / 2;
    var scaleZ = Math.min(inverse_scale(xyc[0], xyc[2], middle), inverse_scale(xyc[1], xyc[2], middle));
    var result = scale(xyc, middle, scaleZ);

    return result;
}

function inverse_scale(x, count, middle) {
    var scaleX = 1000;
    var X = x - middle;
    if (X !== 0) {
        scaleX = Math.abs((middle - Math.sqrt(count) / 2) / X);
    }
    return scaleX;
}

function scale(xyc, middle, scale) {
    return [(xyc[0] - middle) * scale + middle, (xyc[1] - middle) * scale + middle, xyc[2]];
}

function migrateColors(gridM, colorsM, size, attractors) {
    for (row = 0; row < size; row++) {
        for (col = 0; col < size; col++) {
            // calculate r^2 current cell color to attractor center - all 9 cells
            // calculate r^2 for each of 8 neighbors, and r^2 if they were at center
            // find trade with biggest reduction in r^2  
            // delta r^2 = r^2(center_old - center_new + target_old - target_new)
            // swap colors
        }
    }
}