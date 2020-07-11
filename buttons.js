function cycle_delay() {
    var dropdownDelay = document.getElementById("select_delay");
    states.interval = parseInt(dropdownDelay.options[dropdownDelay.selectedIndex].value);

    stop_loop();
    start_loop();
}

function color_depth() {
    var temp = document.getElementById("color_depth").selectedIndex;
    if (temp === states.color_group) {
        return;
    }

    stop_loop();
    states.color_group = temp;
    load_grid_randomly();
    paint_display();
    start_loop();
}

function grid_size() {
    var temp = document.getElementById("grid_size").selectedIndex;
    if (states.grid_size_current === states.grid_sizes[temp]) {
        return;
    }
    stop_loop();
    states.grid_size_current = states.grid_sizes[temp];
    states.grid = new Grid(states.grid_size_current);
    load_grid_randomly();
    paint_display();

    start_loop();
}