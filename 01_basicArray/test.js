// Question: Find the Shortest Word in a Comma-Separated String

// Write a function findShortestWord that takes a string str consisting of comma-separated words and returns the shortest word in the string. If the input string is empty or contains only whitespace, the function should return false.

let str = "mango,apple,my,go,javascript,D"

const findShortestWord = (str)=>{
    if(str.trim().length ===0)return false
    let word = str.split(",")
    word = word.sort((a,b)=>a.length-b.length)
    return word[0]
}
console.log(findShortestWord(str));


