generation = 0;
interval = 1000;


function make_blob() {
    setInterval(function() {
        if (run) {
            generation++;
            paint_display(generation)
        }
    }, 1000);
}