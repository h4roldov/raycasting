class Player {

    constructor(x, y, fov) {
        this.pos = createVector(x, y);
        this.fov = fov;
        this.rays = [];
        this.heading = -2.15;
        this.walls = [];
        for (let i = -fov / 2; i < fov / 2; i++) {
            this.rays.push(new Ray(this.pos, radians(i * 0.5) + this.heading));
        }

    }

    setWalls(walls) {
        this.walls = walls;
    }

    rotate(angle) {
        this.heading += angle;
        let index = 0;
        for (let i = -this.rays.length / 2; i < this.rays.length / 2; i += 1) {
            this.rays[index].setAngle(radians(i * 0.5) + this.heading);
            index++;
        }
    }
    move(amt) {
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amt);
        if ((this.pos.x + vel.x <= 30 || this.pos.x + vel.x >= 570) || (this.pos.y + vel.y <= 30 || this.pos.y + vel.y >= 570) || ((this.pos.x + vel.x >= 390 && this.pos.x + vel.x <= 420) && (this.pos.y + vel.y >= 210 && this.pos.y + vel.y <= 420)))
            return;
        this.pos.add(vel);
    }
    lookWall(a) {
        const column = [];
        for (let ray of this.rays) {
            let record = Infinity;
            let closest = null;
            for (let wall of a) {
                const pt = ray.checkWall(wall);
                if (pt) {
                    let d = p5.Vector.dist(ray.pos, pt);
                    const ang = ray.dir.heading() - this.heading;
                    d *= cos(ang);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                line(ray.pos.x, ray.pos.y, closest.x, closest.y);
            }
            column.push(record);
        }
        return column;
    }
    show() {
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, 16);
    }
}