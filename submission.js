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
  };
  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
  };
