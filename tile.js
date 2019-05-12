class Tile {

    constructor(x, y, width, height, type) {
        this.pos = createVector(x, y);
        this.width = width;
        this.height = height;
        this.type = type;
        //this.ima = loadImage('img/floor.jpg');

    }

    show() {
        switch (this.type) {
            case "wall":
                fill(160);
                break;
            case "floor":
                fill(0);
                break;
            case "none":
                fill(255);
                break;

        }
        rectMode(CENTER);
        // if (this.type == "floor") {
        //     ellipse(this.pos.x, this.pos.y, 10);
        //     image(this.ima, this.pos.x, this.pos.y, this.width * 1000, this.height * 1000);
        // } else
        stroke(255);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        // line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.height);
        // line(this.pos.x, this.pos.y + this.height, this.pos.x + this.width, this.pos.y);
        // line(this.pos.x + this.width, this.pos.y + this.height, this.pos.x + this.width, this.pos.y - this.height);
        // line(this.pos.x + this.width, this.pos.y - this.height, this.pos.x - this.width, this.pos.y - this.height);
    }
}