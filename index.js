// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides;
    }

 get countSides(){
    return this.sides.length;
 }
 get perimeter(){
    return this.sides.reduce((total,value)=>total+value,0) 
 }


}
class Triangle extends Polygon{
    get isValid(){
       if(this.countSides===3){
        const [side1, side2, side3]=this.sides;
        if
        (side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
            return true;
        }else{
            return false;
        }

    }
}

}
class Square extends Polygon{
 get isValid(){
    if(this.countSides===4 && new Set(this.sides).size===1){
        return true;
    }else{
        return false;
    }
 }
 get area(){
    if (this.isValid){
        return this.sides[0]*this.sides[0];
    } else{
        return "this is a not a valid square"
    }
    
 }
}  

let square=new Square(5);
square.area();

