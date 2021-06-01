//Challenge link
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker


function palindrome(str) {
    //regex to match specialcharacters like *$# ^ etc 
    const regex = /[^0-9a-z]/gi
    //replace specialcharacters by "" and convert string into lower case
    str = str.replace(regex,"").toLowerCase();
    //reverse the string
    const reverse = str.split("").reverse().join("");
    if (reverse === str) {
      return true;
    } else {
      return false;
    }
  }
  