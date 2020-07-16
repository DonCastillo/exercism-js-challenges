//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {

  var numStr = num.toString(10);
  var numOfDigit = numStr.length;
  var sum = 0;

  for(let i = 0; i < numOfDigit; ++i){
    sum += (Math.pow( (numStr[i]/1), numOfDigit ));
  }

   return (num === sum) ? true : false ;
};

