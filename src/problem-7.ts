
class Car {
    constructor( public make : string , public model : string , public year : number ){}
    getCarAge(){
        return `${new Date().getFullYear() - this.year} (assuming current year is ${new Date().getFullYear()})` ;
    }
}

const car = new Car("Honda", "Civic", 2018) ;
car.getCarAge() ;
console.log(car.getCarAge()) ; 
