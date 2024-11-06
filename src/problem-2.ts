
const removeDuplicates = (numbers : number[]) : number[] => {
    let newArray : number[] = [] ;
    for(let i of numbers){
        if(!newArray.includes(i)){
            newArray.push(i)
        }
    }
    return newArray ;
}

const withOutDuplicates = removeDuplicates([1, 2, 2, 3, 4, 4, 5]) ;
console.log(withOutDuplicates) ;
