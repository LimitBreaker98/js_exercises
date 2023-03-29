class Shape {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

const square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());

const triangle = new Shape('triangle', 3, 3);

console.log(triangle.calcPerimeter());

class Square extends Shape {
  color;
  constructor(sideLength, color) {
    super('square', 4, sideLength);
    this.color = color;
  }

  calcArea() {
    return this.sideLength * this.sideLength;
  }
  toString() {
    return `Square(name: ${this.name}, sides: ${this.sides}, sideLength:${this.sideLength}, color:${this.color})`;
  }
}

const sq2 = new Square(5, 'blue');
console.log(sq2.calcArea());
console.log(sq2.toString());
