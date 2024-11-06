
type sumArrayType = number[] ;

const sumArray = (numbers : sumArrayType) : number => {
    const sumOfTotalNumbers = numbers.reduce((preve,current) => preve + current) ;
    return sumOfTotalNumbers ;
}

const arr = sumArray([1, 2, 3, 4, 5]);
console.log(arr) ;
