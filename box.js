class Box 
{
  constructor(x, y, w,h) 

  {
    let options = {
     restitution : 0.8 ,
     isStatic : false ,
     density : 1
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;

    push();
    
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
