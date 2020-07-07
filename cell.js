class Cell {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    cell_color() {
        return { r, g, b };
    }

    color_cell({ r, g, b }) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class Grid {
    height;
    width;
    gridCollection;
    constructor(width, height) {
        if (width < 1 || height < 1) {
            return;
        }
        this.columns = width;
        this.rows = height;
        this.gridCollection = new Array(this.rows);

        for (var i = 0; i < this.rows; i++) {
            this.gridCollection[i] = new Array(this.columns);
        }

        for (var col = 0; col < this.columns; col++) {
            for (var row = 0; row < this.rows; row++) {
                this.gridCollection[row][col] = new Cell(0, 0, 0);
            }
        }

        this.gridCollection[1][1] = new Cell(255, 0, 0);
        this.gridCollection[2][1] = new Cell(0, 255, 0);
        this.gridCollection[3][1] = new Cell(0, 0, 255);

    }
}