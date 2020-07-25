function make_blob() {
    states.grid = new Grid(states.grid_size_current);
    load_grid_randomly();
    updateButtons();
    paint_display();
    start_loop();
    states.color_options.push("27: 1-1/2-0 x3");
    const array1 = [0, 128, 255];
    var result = [];
    array1.forEach(elementR => array1.forEach(elementG => array1.forEach(elementB => result.push([elementR, elementG, elementB]))));
    states.colors_patterns.push(result);
    var a = 1;
}