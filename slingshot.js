class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            lenght:10
        }
        this.body=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.body)
    }
    fly (){
        this.body.bodyA=null
    }
    display(){
        if(this.body.bodyA){

       
var pointA=this.body.bodyA.position
var pointB=this.pointB
line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}