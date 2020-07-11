function load_grid_randomly() {
    colors = states.colors_patterns[states.color_group];
    color_space = colors.length;

    for (x = 0; x < states.grid_size_current; x++) {
        for (y = 0; y < states.grid_size_current; y++) {
            random_color = colors[Math.floor(Math.random() * color_space)];
            r = random_color[0];
            g = random_color[1];
            b = random_color[2];
            states.grid.setCellColor(x, y, r, g, b);
        }
    }
}