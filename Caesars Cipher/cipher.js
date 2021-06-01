//Challenge Link
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher


function rot13(str) {
    const arr = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const regex = /\w/;
    let newstr = '';
    for (let i=0; i<str.length;i++) {
        //check if str[i] is alphabet or not
      if (regex.test(str[i])) {
        newstr += arr[arr.indexOf(str[i]) + 13];
        
      } else {
        newstr += str[i]; 
      }
    }
  
    return newstr;
  }