run = false;
generation = 0;
interval = 1000;
var loop_state;
colors_patterns = [
    [
        [0, 0, 0],
        [255, 255, 255]
    ],
    [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255]
    ],
    [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [0, 0, 0]
    ],
    [
        [0, 0, 0],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [255, 255, 0],
        [255, 255, 0],
        [0, 255, 255],
        [255, 255, 255]
    ]
]
color_group = 0;
grid_sizes = [5, 8, 10, 12, 15, 20];
grid_size_current = 5;
var grid;
var canvas_size = 500;