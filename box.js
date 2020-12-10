class Box {
  constructor(x, y) {
    var options = {
        'friction':0.3,
        'density':1.0
    }
    var height = Math.round(random(50,100))

    this.body = Bodies.rectangle(x, y, 50, height, options);
    this.width = 50;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
