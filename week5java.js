//exercise control flow

//function shoppingCart(item, cost, balance) {
//    if(cost>balance){
//        return 'You cannot afford ${item} ';
//    }else{
//    return 'You can afford ${item}';
//    }
//}


//var canIBuy = shoppingCart("New Laptop", 450, 350);

//console.log("can i buy?", canIBuy);

//console.log("Global: ", freePerson)

//var freePerson = 'Lucy';

//function outerFence() {
//    var prisoner1 = 'Tim';
//    console.log("outerFence: ", freePerson);
//    console.log("outerFence: ", prisoner1);
//}

//outerFence();

//console.log("Global: ", prisoner1);

//function reverseString(str) {
//    return str.split("").reverse().join("");
//    var tempArray = str.split("");
  //  var reversedArray = [];
    //for(let i=tempArray.length -1; i>=0 ; i--) {
    //    reversedArray.push(tempArray[i]);
  //  }

    //return reversedArray.join("");
//}    

//console.log(reverseString('abcde'));

function alphabetical(str) {
    return str.split("").sort().join("");
}    

console.log("b", "b".codePointAt());
console.log("B", "B".codePointAt());

console.log(alphabetical("cebda"));

function capitalise(word){
    var firstLetter = word.slice(0, 1);
    var remainingLetters = word.slice(0, 1);
    return firstLetter.toUpperCase() + remainingLetters;
}
function capitaliseList(words){
    var capitalWords = [];
    for (let i = 0; i < words.length; i++) {
        capitalWords.push(capitalise(words[i]));
    }

    return capitalWords;    
}

console.log("CapitaliseList: ", capitaliseList(["don't", "repeat", "yourself"]));

function dataTypes (dataStr, dataNum, dataBool){
    console.log("dataTypes -> dataBool", dataBool)
    console.log("dataTypes -> dataNum", dataNum)
    console.log("dataTypes -> dataStr", dataStr)
}

dataTypes("hello", 9, true);


//write a function that returns the length of the longest word in the sentence

function longestWord(sentence){
    let words = sentence.split(" ");
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
        if(longest < words[i].length){
            longest = words[i].length;
        }       
    }
    return longest;
}
console.log(longestWord("It works on my screen!"))
