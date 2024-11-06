
type Circle = { shape: 'circle' , radius: number } ;
type Rectangle = { shape: "rectangle" , width: number , height: number } ;

const calculateShapeArea = (obj : Circle | Rectangle) : number | undefined => {
    if('radius' in obj){
        return Math.PI * obj.radius * obj.radius ;
    }
    else if('width' in obj && 'height' in obj){
        return obj.width * obj.height ;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle" , width: 4 , height: 6 });

console.log(circleArea) ;
console.log(rectangleArea) ;
