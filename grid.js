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

        // this.gridCollection[1][1] = new Cell(255, 0, 0);
        // this.gridCollection[2][1] = new Cell(0, 255, 0);
        // this.gridCollection[3][1] = new Cell(0, 0, 255);

    }

    setCellColor(x, y, r, g, b) {
        // this.gridCollection[x][y].color_cell(r, g, b); //[y]; //.color_cell(r, g, b);
        this.gridCollection[x][y].color_cell(r, g, b); //[y]; //.color_cell(r, g, b);
        var a = 1;
    }


    cell(x, y) {
        var cell = this.gridCollection[x][y];
        return cell;
    }
}