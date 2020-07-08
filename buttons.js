function cycle_delay() {
    var dropdownDelay = document.getElementById("select_delay");
    interval = parseInt(dropdownDelay.options[dropdownDelay.selectedIndex].value);

    stop_loop();
    start_loop();
}

function color_depth() {
    var temp = document.getElementById("color_depth").selectedIndex;
    if (temp === color_group) {
        return;
    }

    color_group = temp;

    stop_loop();
    //init_grid();
    start_loop();
}

function grid_size() {
    var temp = document.getElementById("grid_size").selectedIndex;
    if (grid_size_current === grid_sizes[temp]) {
        return;
    }
    stop_loop();
    grid_size_current = grid_sizes[temp];
    //init_grid();

    start_loop();
}