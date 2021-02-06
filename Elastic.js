class Elastic{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA, bodyB: bodyB, stiffness: 0.1, length: 100
        }
        this.chain = Matter.Constraint.create(options);
        Matter.World.add(world, this.chain)
    }
    display(){
        var A = this.chain.bodyA.position
        var B = this.chain.bodyB.position
        strokeWeight(5)
        line(A.x, A.y, B.x, B.y)
    }
}