function getFileName() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var today = new Date();
    var date = monthNames[today.getMonth()] + '.' + today.getDate();
    var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
    var dateTime = date + '+' + time;
    return "grid_" + dateTime + ".json";
}

function save_grid(grid) {
    stop_loop();

    var element = document.createElement('a');

    savedData = JSON.stringify({
        states
    });
    var filename = getFileName();

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(savedData));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    start_loop();
}

function load_grid() {
    stop_loop();
    var element = document.createElement('input');
    element.type = 'file';

    var file = "";
    element.onchange = e => {
        file = e.target.files[0];
        // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!
            var states2 = JSON.parse(decodeURIComponent(content)).states;
            // states2.grid = deserializeGrid(states2);
            var k = new Grid(states2.grid_size_current);
            k.deserializeGrid(states2.grid);
            states2.grid = k;
            states2.updated = true;
            states = states2;
        }

        a = 1;
    }

    element.click();
    start_loop();

}