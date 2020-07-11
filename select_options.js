function setOptions(id, sourceArray) {
    while (id.options.length > 0) {
        id.remove(id.options.length - 1);
    }

    for (i = 0; i < sourceArray.length; i++) {
        var opt = document.createElement('option');

        opt.text = sourceArray[i];
        id.add(opt, null);
    }
}

function updateButtons() {
    var delays = document.getElementById("select_delay");
    setOptions(delays, states.delay_options);
    delays.options[states.delay_option].selected = 'selected';

    var color_depths = document.getElementById("color_depth");
    setOptions(color_depths, states.color_options);
    color_depths.options[states.color_group].selected = 'selected';

    var sizes = document.getElementById("grid_size");
    setOptions(sizes, states.grid_sizes);
    var size_index = Math.max(0, states.grid_sizes.indexOf(states.grid_size_current));
    sizes.options[size_index].selected = 'selected';

    a = 1;
}