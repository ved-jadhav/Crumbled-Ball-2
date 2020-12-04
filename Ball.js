class Ball {
  constructor(x, y, radius) {
      var options = {isStatic: false, restitution: 0.5, friction: 0.5}
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
      
  
  }

  display() {
      var pos = this.body.position;
     push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(RADIUS)
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
  }
}
  
