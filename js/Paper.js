class Paper{
    constructor(x,y,radius){
        var options = {
            //'frictionAir':0,
            'friction':0.5,
            isStatic :false,
            density :1.2,
           // 'frictionStatic':1,
           // 'inertia': Infinity,
            'restitution':0.8
        }
        this.paper = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image = loadImage("assets/Picture1.png");
        World.add(world,this.paper);
        
        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.paper.position.x,this.paper.position.y,this.width,this.height);
    }
}