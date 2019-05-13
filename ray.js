class Ray {

    constructor(pos, angle) {
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
    }
    setAngle(angle) {
        this.dir = p5.Vector.fromAngle(angle);
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    checkWall(wall) {
        let x1 = wall[0].x;
        let y1 = wall[0].y;
        let x2 = wall[1].x;
        let y2 = wall[1].y;

        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + this.dir.x;
        let y4 = this.pos.y + this.dir.y;

        let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0)
            return;

        let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            let pnt = createVector();
            pnt.x = x1 + t * (x2 - x1);
            pnt.y = y1 + t * (y2 - y1);
            //line(this.pos.x, this.pos.y, pnt.x, pnt.y);
            return pnt;
        } else {
            return
        }

    }
    show() {
        stroke(255);
        fill(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 10, this.dir.y * 10);
        pop();
    }
}