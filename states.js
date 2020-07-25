let states = {
    run: false,
    generation: 0,
    interval: 1000,
    loop_state: null,

    grid_sizes: [5, 8, 10, 12, 15, 20, 40],
    grid_size_current: 5,
    grid: null,

    canvas_size: 500,

    delay_options: [1, 3, 10, 30, 100, 300, 1000],
    delay_option: 6,
    color_options: ["2: B/W", "3: R/G/B", "4: R/G/B/BLACK", "8: BLK/R/G/B/RG/RB/GB/WH"],
    colors_patterns: [
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
            [255, 0, 255],
            [0, 255, 255],
            [255, 255, 255]
        ]
    ],
    color_group: 0,
    updated: true,
    mean_centers: null
}