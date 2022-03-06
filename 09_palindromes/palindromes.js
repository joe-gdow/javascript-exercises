const palindromes = function (string) { 
  //let bool = true;
  //normalizing the input to all lowercase, no punctuation, etc.
  string = string.replace(/[.,'"\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.replace(/\s/g,"");
  string = string.toLowerCase();
  let array = string.split(''); //string becomes an array for ease of use

  //function to reverse the string
  function reverse(array) {
    let revArray = [];
      for (let i = 0; i < array.length; i++) {
          revArray.unshift(array[i]);
      }
      return revArray
  };

  let reversed = reverse(array);
  //so now we have two arrays of lowercase letters that we have to compare
  
  if (array.length !== reversed.length) {
    return false
  }
  
  for (let i=0; i<array.length; i++) {
    if (array[i] !== reversed[i]) {
      return false
    }
  }
  
  return true
}
// Do not edit below this line
module.exports = palindromes;
