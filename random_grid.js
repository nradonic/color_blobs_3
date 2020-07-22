function load_grid_randomly() {
    colors = states.colors_patterns[states.color_group];
    color_space = colors.length;

    for (x = 0; x < states.grid_size_current; x++) {
        for (y = 0; y < states.grid_size_current; y++) {
            var index = Math.floor(Math.random() * color_space);
            states.grid.setCellColor(x, y, index);
        }
    }
}