const findSum = function(array) {
    // your code here - don't forget to return a number!
    //loop through the numbers in the array and add them up
    let num = 0;
    for (i=0; i < array.length; i++) {
        num = num + array[i];
    }
    return num
  };
  
  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
  };
  
  const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    //make string lowercase to get things uniform
    str = str.toLowerCase();
    //get length of string
    let length = str.length;
    //divide length in half and floor to account for odd numbers
    length = Math.floor(length / 2);
    //create string for first half using slice
    let firstHalf = str.slice(0,length);
    //create string for second half using substr
    let secondHalf = str.substr(-length);
    let dummyVar = 0;
    //cross reference strings using for loop with charAt
    for (i = 0; i < length; i++) {
        (firstHalf.charAt(i) !== secondHalf.charAt(length-1-i)) ? dummyVar = dummyVar+1 : dummyVar = dummyVar;
    }
    //if dummy var is 0 return true, else return false
    if (dummyVar === 0) {
        return true;
    }
    else {
        return false;
    }
  };
  
  const largestPair = function(array) {
    // your code here - don't forget to return a number!
  };
  
  const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    //split string by open parentheses and get array
    let firstArray = str.split("(");
    //get first index of array
    let firstHalf = firstArray[0];
    //split string by closed parentheses and get array
    let secondArray = str.split(")");
    //get second index of array
    let secondHalf = secondArray[1];
    //add both strings and return string
    return firstHalf + secondHalf;
  };
  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
    //set string to lowercase because we are not told to assume that it is
    str = str.toLowerCase();
    //create arrays for each point values
    const one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    const two = ["d", "g"];
    const three = ["b", "c", "m", "p"];
    const four = ["f", "h", "v", "w", "y"];
    const five = ["k"];
    const eight = ["j", "x"];
    const ten = ["q", "z"];
    //create score variable
    let score = 0;
    //loop through characters in string to see if it is in each array
    //if it is in the array, update score accordingly
    for (i=0; i < str.length; i++) {
        let char = str.charAt(i);
        (one.includes(char)) ? score = score + 1 : score = score;
        (two.includes(char)) ? score = score + 2 : score = score;
        (three.includes(char)) ? score = score + 3 : score = score;
        (four.includes(char)) ? score = score + 4 : score = score;
        (five.includes(char)) ? score = score + 5 : score = score;
        (eight.includes(char)) ? score = score + 8 : score = score;
        (ten.includes(char)) ? score = score + 10 : score = score;
    }
    return score;
  };
