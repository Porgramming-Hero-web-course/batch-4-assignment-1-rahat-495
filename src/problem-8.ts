{

    const validateKeys = <T>(obj: T, keys: (keyof T)[] ) => {
        let objKeys : string[] = [] ;
        let isKeyAxist : boolean = false ;
        for(let i in obj){
            objKeys.push(i.toString()) ;
        }

        for(let i of keys){
            if(objKeys.includes(i.toString())){
                isKeyAxist = true ;
            }
            else{
                isKeyAxist = false ;
            }
        }

        return isKeyAxist ;
    };

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));

}
