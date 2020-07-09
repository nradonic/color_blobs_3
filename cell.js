class Cell {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    cell_color() {
        return [this.r, this.g, this.b];
    }

    color_cell(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}