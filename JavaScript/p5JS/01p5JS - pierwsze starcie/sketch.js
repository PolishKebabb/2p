function setup(){
    createCanvas(1200, 700);
    background('grey');
}

//-------------------

let x = 200;
let y = 200;

function draw(){
    point(100,100);
    fill(random(0,255),random(0,255),random(0,255));
    let dryg = random(-30,30);
    ellipse(x + dryg, x + dryg, 280, 180);

    fill('green');
    ellipse(300, 500, 80, 80);
    rect(0, 0, 1000, 100);

    ellipse(mouseX, mouseY, 80, 80);
}
