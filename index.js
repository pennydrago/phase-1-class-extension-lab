// Your code here

class Polygon {
  
  constructor(array) {
    this.array = array;
  }
  
  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    const sum = this.array.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum;
  }
}

class Triangle extends Polygon {

  get isValid() {

    if (this.countSides != 3) {
      return false;
    }

    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];

    if ((a + b) > c && (a + c) > b && (b + c) > a) {
      return true;
    } else {
      return false;
    }
  }
  }

class Square extends Polygon {


  get isValid() {
    
    if (this.countSides != 4) {
      return false;
    }

    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];
    let d = this.array[3];

    if (a == b && a == c && a == d) {
      return true;
    } else {
      return false;
    }

  }

  get area() {
    return this.array[0] ** 2;
  }
}