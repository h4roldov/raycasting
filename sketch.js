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
    world.show();
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
        const b = map(c, 0, 600, 255, 0);
        h = map(c, 0, 700, 700, 300);
        an = map(ancho, 0, 100, 1, 100, true);
        imageMode(CENTER);
        //rect(i * ancho, r, ancho, h / c * 100);
        image(imgs[n + 1], i * an, r, an, h / c * 100);
        if (n == 9) n = 0;
        n++;

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

}