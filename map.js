class Map {
    constructor(size) {
        this.size = size;
        this.tWidth = size / 20;
        this.points = [];
        this.walls = [];
    }

    getWalls() {
        let wall;
        for (let point of this.points) {
            wall = [];
            wall.push(point);
            wall.push(createVector(point.x, point.y + this.tWidth));
            this.walls.push(wall);
            wall = [];
            wall.push(createVector(point.x, point.y + this.tWidth));
            wall.push(createVector(point.x + this.tWidth, point.y + this.tWidth));
            this.walls.push(wall);
            wall = [];
            wall.push(createVector(point.x + this.tWidth, point.y + this.tWidth));
            wall.push(createVector(point.x + this.tWidth, point.y));
            this.walls.push(wall);
            wall = [];
            wall.push(createVector(point.x + this.tWidth, point.y));
            wall.push(point);
            this.walls.push(wall);
        }
        return this.walls;
    }

    show() {
        let tile;
        for (let i = 0; i < this.size; i += this.tWidth) {
            for (let j = 0; j < this.size; j += this.tWidth) {
                if (i == 0 || j == 0 || i == this.size - this.tWidth || j == this.size - this.tWidth) {
                    tile = new Tile(j + this.tWidth / 2, i + this.tWidth / 2, this.tWidth, this.tWidth, "wall");
                    this.points.push(createVector(j, i));
                }
                else if (i >= 200 && i <= 400 && j == 390) {
                    tile = new Tile(j + this.tWidth / 2, i + this.tWidth / 2, this.tWidth, this.tWidth, "wall");
                    this.points.push(createVector(j, i));
                }
                else
                    tile = new Tile(j + this.tWidth / 2, i + this.tWidth / 2, this.tWidth, this.tWidth, "floor");

                tile.show();
            }

        }
    }
}