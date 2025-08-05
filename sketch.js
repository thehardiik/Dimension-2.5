let walls = [];
let ray;
let particle


function setup(){

    createCanvas(800, 400);
    particle = new Particle()
    walls.push(new Boundary(100, 100, 100, 150));
    walls.push(new Boundary(100, 100, 150, 100));
    walls.push(new Boundary(150, 100, 150, 150));
    walls.push(new Boundary(100, 150, 150, 150));

    walls.push(new Boundary(200, 200, 200, 250));
    walls.push(new Boundary(200, 200, 250, 200));
    walls.push(new Boundary(250, 200, 250, 250));
    walls.push(new Boundary(200, 250, 250, 250));

    walls.push(new Boundary(0, 0, 0, 400));
    walls.push(new Boundary(0, 0, 400, 0));
    walls.push(new Boundary(0, 400, 400, 400));
    walls.push(new Boundary(400, 0, 400, 400));
    
}



function draw(){
    if(keyIsDown(LEFT_ARROW)){
        particle.move(3);
    }

    if(keyIsDown(RIGHT_ARROW)){
        particle.move(1);
    }

    if(keyIsDown(UP_ARROW)){
        particle.move(4);
    }

    if(keyIsDown(DOWN_ARROW)){
        particle.move(2);
    }

    if(keyIsDown(65)){
        particle.rotate(0.05);
    }

    if(keyIsDown(68)){
        particle.rotate(-0.05);
    }

    if(keyIsDown(87)){
        particle.move(4);
    }

    if(keyIsDown(83)){
        particle.move(2);
    }

    background(0);

    for(let wall of walls){
        wall.show()
    }
    
    //particle.update(mouseX, mouseY, walls);
    particle.show()
    //particle.lookAt(mouseX, mouseY)
    const scene = particle.look(walls)
    const w = 400/scene.length

    push()
    translate(400, 0)
    for(let i = 0; i < scene.length; i++){
        noStroke()
        const b = map(scene[i] , 0, 500, 255, 0)
        fill(b)


        const h = 30*400/(scene[i]*0.57735)
        rectMode(CENTER)
        rect(i*w + w/2, 200, w+1, h)
    }
    pop()
    
}