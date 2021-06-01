//Challenge Link
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s-]?\d{4}$/;
    console.log(regex.test(str))
    if(regex.test(str)) {
      return true
    } else {
      return false;
    }
  }