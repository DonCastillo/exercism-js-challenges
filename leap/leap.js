//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  var isLeap = false;

  if( year%4 === 0 ) {
    isLeap = true;
    if( year%100 === 0 ){
      if( year%400 !== 0 ){
        isLeap = false;
      } else {
        isLeap = true;
      }
    }
  } else {
    isLeap = false;
  }

  return isLeap;
};

