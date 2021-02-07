class Bob{
 constructor(x,y){
     options -{
         'restitution': 0.5,
         isStatic: true
     }

     this.body = circle(x, y,22,options);
     World.add(world,this.body);
 } display(){
   var bobx = this.body.position.x
   var boby = this.body.position.y
   eclipseMode(centre);

   eclipse(bobx,boby,22,options);


 }

}