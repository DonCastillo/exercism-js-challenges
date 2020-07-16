//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  var reverse = '';
  for(let i=string.length-1; i>=0; --i ){
    reverse += string.charAt(i);
  }
  return reverse;
};

