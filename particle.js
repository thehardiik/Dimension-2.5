class Particle {

    constructor(){
        
        this.pos = createVector(width/10, height/2)
        this.rays = [];
        this.heading = 0;
        for(let i = 0; i < 60; i += 1){
            this.rays.push(new Ray(this.pos, radians(i)));
        }

    }

    

    rotate(angle){
        this.heading += angle
        for(let i = 0; i < this.rays.length; i++){
            this.rays[i].setAngle(radians(i) + this.heading);
        }
    }

    move(n){
        if(n == 1){
            this.pos.set(this.pos.x+1, this.pos.y)
        }

        if(n == 2){
            this.pos.set(this.pos.x, this.pos.y+1)
        }

        if(n == 3){
            this.pos.set(this.pos.x-1, this.pos.y)
        }

        if(n == 4){
            this.pos.set(this.pos.x, this.pos.y-1)
        }
        
    }

    update(x, y, walls){
        this.pos.set(x, y);
    }

    look(walls){
        const scene = [];
        let i = 0;
        for(let ray of this.rays){
            let closest = null
            let record = Infinity;

            for(let wall of walls){

                const pt = ray.cast(wall);
                

                if(pt){
                    //ellipse(pt.x, pt.y, 5);
                    const d = p5.Vector.dist(this.pos, pt)
                    if(d < record ){
                        record = d;
                        closest = pt;
                    }
                }
                
                
            }

            if(closest){
                line(this.pos.x, this.pos.y, closest.x, closest.y)
                
                //ellipse(closest.x, closest.y, 5);
            }
            
            scene[i] = record;
            i++;
                 
            
        }

        return scene;
    }

    show(){
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, 2);
        for(let ray of this.rays){
            ray.show();
        }
    }
}