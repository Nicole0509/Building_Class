// Reg Number : 222013934
// Names : NISINGIZWE NIYIGENA NICOLE
// Date of Creation : April 18, 2024
// This program is responsible to define the class Building 

class Building {
    constructor(description) {
      console.log(description);
      this._length = 0;
      this._width = 0;
      this._height = 0;
    }
  
    setDimensions(length, width, height) {
      this._length = length;
      this._width = width;
      this._height = height;
    }
  
    get length() {
      return this._length;
    }
  
    get width() {
      return this._width;
    }
  
    get height() {
      return this._height;
    }
  
    perimeter() {
      return 2 * (this._length + this._width);
    }
  
    area() {
      return this._length * this._width;
    }
  
    destructor() {
      console.log("Goodbye!");
    }
  }
  
  module.exports = Building;
  

