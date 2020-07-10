function start_loop() {
    loop_state = setInterval(function() {
        if (run) {
            generation++;
            paint_display()
        }
    }, interval);
}

function stop_loop() {
    clearInterval(loop_state);
}