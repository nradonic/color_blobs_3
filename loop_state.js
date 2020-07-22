function start_loop() {
    states.loop_state = setInterval(function() {
        if (states.updated) {
            updateButtons();
            states.updated = false;
            paint_display();
        }

        if (states.run) {
            states.generation++;
            paint_display();
            paint_display_overlay(generateNewGeneration());
        }
    }, states.interval);
}

function stop_loop() {
    clearInterval(states.loop_state);
    mean_centers = null;
}