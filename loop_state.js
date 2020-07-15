function start_loop() {
    states.loop_state = setInterval(function() {
        if (states.updated) {
            updateButtons();
            states.updated = false;
            paint_display();
        }

        if (states.run) {
            states.generation++;
            generateNewGeneration();
            paint_display();
        }
    }, states.interval);
}

function stop_loop() {
    clearInterval(states.loop_state);
}