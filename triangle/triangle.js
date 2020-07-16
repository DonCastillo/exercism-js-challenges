//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  
  constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
  }

  isEquilateral() {
    var side1 = this.side1;
    var side2 = this.side2;
    var side3 = this.side3;
    if( side1 == 0 && side2 == 0 && side3 == 0 ){
      return false;
    } else {
      return ( side1 == side2 && side1 == side3 && side2 == side3 ) ? true : false;
    }
  }

  isIsosceles() {
    var side1 = this.side1;
    var side2 = this.side2;
    var side3 = this.side3;
    if( (side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1) ){
      return (side1 == side2 || side1 == side3 || side2 == side3) ? true : false;
    } else {
      return false;
    }
  }

  isScalene() {
    var side1 = this.side1;
    var side2 = this.side2;
    var side3 = this.side3;
    if( (side1 + side2 > side3) && (side1 + side3 > side2) && (side3 + side2 > side1) ){
      return (side1 != side2 && side1 != side3 && side2 != side3) ? true : false;
    } else {
      return false;
    }
  }
}
