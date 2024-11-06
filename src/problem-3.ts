
const countWordOccurrences = (sentence : string , word : string) : number => {
    const sentenceArr : string[] = sentence.toLocaleLowerCase().split(' ') ;
    const lowerCaseWord : string = word.toLocaleLowerCase() ;
    let numberOfWordOccurrences : number = 0 ;
    for(let i of sentenceArr){
        if(i.includes(lowerCaseWord)){
            numberOfWordOccurrences += 1 ;
        }
    }
    return numberOfWordOccurrences ;
}

const wordOccurrences = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript") ;
console.log(wordOccurrences) ;