//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
  var color1 = COLORS.indexOf( array[0] );
  var color2 = COLORS.indexOf( array[1] );
  return `${color1}${color2}`/1;
};

