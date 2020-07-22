class Cell {
    constructor(index) {
        this.index = index;
    }

    cell_color() {
        var k = states.colors_patterns[states.color_group][this.index];
        return [k[0], k[1], k[2], this.index];
    }

    color_cell(index) {
        this.index = index;
    }
}