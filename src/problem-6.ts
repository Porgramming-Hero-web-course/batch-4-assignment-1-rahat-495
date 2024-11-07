
interface Profile {
    name : string ; 
    age : number ;
    email : string ;
}

const updateProfile = (obj : Profile , updatedObj : object) => {
    obj = { ...obj , ...updatedObj } ;
    return obj ;
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
