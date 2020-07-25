//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const colorCode = (color) => {
  return COLORS.indexOf(color);
};


export const decodedValue = (array) => {
  var color1 = colorCode( array[0] );
  var color2 = colorCode( array[1] );
  return Number.parseInt(`${color1}${color2}`, 10);
};




