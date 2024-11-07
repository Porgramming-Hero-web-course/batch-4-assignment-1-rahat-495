
interface Profile {
    age : number ;
    name : string ; 
    email : string ;
}

const updateProfile = (obj : Profile , updatedObj : object) => {
    obj = { ...obj , ...updatedObj } ;
    return obj ;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

console.log(updateProfile(myProfile, { age: 26 }));