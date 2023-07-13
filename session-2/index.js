// Occurance of each words inside string

// This is a sample sentance. This sentance is for testing

/*
{
    This  : 1
    is:2
    a:1
    sample:1
    sentance:2
    is: 1
    for: 1
    testing:1
}

*/

const countWordOccurance = (str) => {
    const words = str.split(" ");
    const wordCount = {}
    for(let word of words){
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    }
    console.log(wordCount);
}

// countWordOccurance("This is a sample sentance This sentance is for testing")
// countWordOccurance("that this this that this a a a an an java java script script c cpp php php this that", "java")

const countLetterOccurance = (str) => {
    const letters = str.split("");
    const letterCount = {};
    for(let letter of letters){
        if (letterCount[letter]) {
            letterCount[letter]++
        } else {
            letterCount[letter] = 1
        }
    }

    console.log(letterCount);
}

// countLetterOccurance("aabbccddeefff");


// Count the occurances of a Character in a string

const countOccuranceOfChar = (str, key) => {
    return str.split(key).length -1
}

// countOccuranceOfChar("ajeet kumar jha", "a")

const countOccuranceOfCharCustom = (str, key) => {
    let count = 0;
    for(let i =0; i< str.length ; i++) {
        if(str[i] === key) {
            count++
        }
    }
    return count;
}

// count no of vowels in the given string 

const countVowels = (str) => {
    const vowels = "aeiou";
    const lowerCaseStr = str.toLowerCase();
    let count = 0;

    for(let char of lowerCaseStr){
        if(vowels.includes(char)) {
            count++
        }
    }

    // for(let i = 0 ; i < lowerCaseStr.length; i++){
    //     if(vowels.includes(lowerCaseStr[i])) {
    //         count++
    //     }
    // }

    return count;
}


// check Anagram

const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }

    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    if(sortedStr1 !== sortedStr2) {
        return false
    }

    return true;
}

// checkAnagram("listen","silent");

// Remove duplicates

const removeDuplicate = str => {
    let uniqeStr = "";

    for(let char of str) {
        if(!uniqeStr.includes(char)) {
            uniqeStr += char;
        }
    }

    return uniqeStr;
} 

// console.log( removeDuplicate("ajeet kumar jha"))



const reverseWords =  str => {
    let reversedSentence = "";
    let currentWord = "";

    for(let i = 0; i < str.length ; i++){
        if(str[i] === ' '){
            reversedSentence = currentWord +  " " + reversedSentence;
            currentWord = ''
        } else {
            currentWord += str[i] 
        }
    }
    reversedSentence = currentWord + " " + reversedSentence;

    return reversedSentence.trim()
}   

// console.log(reverseWords("Hello world! This is a sample sentence."))

const reverseLettersInsideWords = str => {
    const words = str.split(' ');
    
    const reverseStr = word => {
        return word.split('').reverse().join("");
    } 
    
    for(let i = 0; i < words.length ; i++){
        words[i] = reverseStr(words[i]);
    }

    return words.join(" ")
}

console.log(reverseLettersInsideWords("Hello world! This is a sample sentence."))