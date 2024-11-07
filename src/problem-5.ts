
const getProperty = < Obj , Property extends keyof Obj > (obj : Obj , property : Property) => {
    return obj[property] ;
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
