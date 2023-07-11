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

countLetterOccurance("aabbccddeefff");
