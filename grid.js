class Grid {

    constructor(x) {
        if (x < 1) {
            return;
        }
        this.columns = x;
        this.rows = x;
        this.gridCollection = new Array(this.rows);

        for (var i = 0; i < this.rows; i++) {
            this.gridCollection[i] = new Array(this.columns);
        }

        for (var col = 0; col < this.columns; col++) {
            for (var row = 0; row < this.rows; row++) {
                this.gridCollection[row][col] = new Cell(0, 0, 0);
            }
        }

    }

    setCellColor(columnx, rowy, index) {
        this.gridCollection[rowy][columnx].color_cell(index); //[y]; //.color_cell(r, g, b);
    }


    cell(columnx, rowy) {
        var cell = this.gridCollection[rowy][columnx];
        return cell;
    }

    getSize() { return this.columns; }

    deserializeGrid(grid_data) {
        for (x = 0; x < this.gridCollection.length; x++) {
            for (y = 0; y < this.gridCollection.length; y++) {
                var k = grid_data.gridCollection[y][x];

                this.setCellColor(x, y, k.index);
            }
        }
    }
}