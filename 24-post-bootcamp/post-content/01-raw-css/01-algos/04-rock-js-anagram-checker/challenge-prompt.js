// Anagrams


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck(str1, str2) {
  // ---------- Your Code Here ----------
  //check if str1 letters are in str2 and if all are and there are no more letters in str2. return true 
  //first remove white spaces from each string
  //then change all to lowercase to remove case sensitive 
  //then split the string in to sub strings with a comma
  //sort the array
  //join the array into one large string

  let newStr1 = str1.replace(/\s/g, '');
  newStr1 = newStr1.toLowerCase();
  newStr1 = newStr1.split("").sort().join("");

  let newStr2 = str2.replace(/\s/g, '');
  newStr2 = newStr2.toLowerCase();
  newStr2 = newStr2.split("").sort().join("");

  if (newStr1.length == newStr2.length){
    console.log('anagram found ' + str1 + " " + str2)
    return true
  }
  else {
    console.log(str1 + ' and ' + str2 + ' is not an anagram')
  }
  return false

  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
