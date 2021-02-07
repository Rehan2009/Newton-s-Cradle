class Roof{
    constructor(x,y){
        options -{
            'restitution': 0.1,
            isStatic: true
        }
   
        this.body = rectangle(x, y,220,36,options);
        World.add(world,this.body);
    } display(){
      var roofx = this.body.position.x
      var roofy = this.body.position.y
      rectMode(centre);
   
      rectangle(roofx,roofy,220,36,options);
   
   
    }
   
   }