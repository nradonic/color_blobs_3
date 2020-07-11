function make_blob() {
    states.grid = new Grid(states.grid_size_current);
    load_grid_randomly();
    updateButtons();
    paint_display();
    start_loop();
}