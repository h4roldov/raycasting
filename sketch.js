// let wall;
// let wall2;
// let wall3;
// let wall4;
let world;
let ray;
let k;
let a;
let player;
let img;
let imgs = [];
let img2;
let floor;

function setup() {

    // wall = new Tile(300, 10, 600, 20);
    // wall2 = new Tile(500, 200, 20, 300);
    // wall3 = new Tile(100, 100, 150, 20);
    // wall4 = new Tile(300, 590, 600, 20);
    world = new Map(600);
    createCanvas(1200, 600);
    //ray = new Ray(createVector(100, 100), radians(180));
    player = new Player(460, 560, 60);

    world.show();
    a = world.getWalls();
    player.setWalls(a);
    for (let i = 1; i <= 10; i++) {
        img = loadImage('img/row-1-col-' + i + '.jpg');
        imgs[i] = img;
    }
    img2 = loadImage('img/wall.jpg');

}

function draw() {
    background(50);
    //background(img3);
    world.show();
    // wall.show();
    // wall2.show();
    // wall3.show();
    // wall4.show();

    //ray.show();
    //ray.lookAt(mouseX, mouseY);
    //player.show();
    franja = player.lookWall(a);
    ancho = 600 / franja.length;
    push();
    translate(600, 0);
    let r = height / 2;

    let i = 0;
    let n = 0;
    let h;
    let z = 0;
    for (let c of franja) {
        noStroke();
        //ancho = map(ancho, 0, 100, 100, 0);
        const b = map(c, 0, 600, 255, 0);
        h = map(c, 0, 700, 700, 300);
        an = map(ancho, 0, 100, 1, 100, true);

        //fill(img);
        //rectMode(CENTER);
        imageMode(CENTER);
        //rect(i * ancho, r, ancho, h / c * 100);

        image(imgs[n + 1], i * an, r, an, h / c * 100);
        if (n == 9) n = 0;
        n++;
        // if (i % 10 == 0) {
        //     image(img2, z * an * 10, r, an * 10, map(h / c * 100 * z, 0, 100, 100, 50));
        //     z++;
        // }

        i++;
    }

    pop();

    if (keyIsDown(LEFT_ARROW)) {
        player.rotate(-0.01);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.rotate(0.01);

    }
    if (keyIsDown(UP_ARROW)) {
        player.move(2);

    }

    if (keyIsDown(DOWN_ARROW)) {
        player.move(-2);

    }
    // for (let k = 0; k < a.length; k += 4) {
    //     for (let i = 0; i < 4; i++) {
    //         const pt = ray.checkWall(a[k + i]);
    //         if (pt) {
    //             let d = p5.Vector.dist(ray.pos, pt);
    //             if (d < record) {
    //                 record = d;
    //                 closest = pt;
    //             }
    //         }

    //     }
    //     if (closest) {
    //         line(ray.pos.x, ray.pos.y, closest.x, closest.y);
    //     }


    // }





}