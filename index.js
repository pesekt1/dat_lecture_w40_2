//function declaration
function CircleFunction(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
  };
}

const circleF = new CircleFunction(10);

//class declaration
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log(this);
      console.log("draw circle");
    };
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10);
console.log(circle.area());
console.log(circle);
circle.draw();

let draw = circle.draw;
draw();

//static methods
class CircleStatic {
  constructor(radius) {
    this.radius = radius;
  }

  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new CircleStatic(radius);
  }
}

const circleStatic = CircleStatic.parse('{"radius": 1}');

class Math2 {
  static sum(...items) {
    return items.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}

//private members using symbols
const _radiusSymbol = Symbol();
const _drawSymbol = Symbol();

class Circle4 {
  constructor(radius) {
    this[_radiusSymbol] = radius;
  }

  [_drawSymbol]() {
    console.log("draw");
  }

  get radius() {
    return this[_radiusSymbol];
  }
  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    this[_radiusSymbol] = value;
  }
}

const c4 = new Circle4(1);
c4.radius = 10;

console.log(c4.radius);

console.log(c4);

let radiusKey = Object.getOwnPropertySymbols(c4)[0];
console.log(radiusKey);
console.log(c4[radiusKey]);

//private members using weakmaps
const _radiusWM = new WeakMap();
const _drawWM = new WeakMap();

class Circle5 {
  constructor(radius) {
    _radiusWM.set(this, radius);
    _drawWM.set(this, () => {
      console.log("draw");
    });
  }

  get radius() {
    return _radiusWM.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radiusWM.set(this, value);
  }

  draw() {
    _drawWM.get(this)();
  }
}

//private members using # prefix
class CircleHashTag {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  #draw() {
    console.log("draw");
  }
  getRadius() {
    return this.#radius;
  }
}

const cHashTag = new CircleHashTag(1);
console.log(cHashTag);
