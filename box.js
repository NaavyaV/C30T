class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.00,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.Visiblity = 255;
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3){
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       strokeWeight(4);
       rect(0, 0, this.width, this.height);
       pop();
      } else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }

    score(){     
      if(this.Visiblity < 0 && this.Visiblity > -105){
        score++;
      }
    }
  };