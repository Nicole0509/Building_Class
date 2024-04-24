// Reg Number : 222013934
// Names : NISINGIZWE NIYIGENA NICOLE
// Date of Creation : April 18, 2024
// This program is responsible to testing the class Building 

const Building = require('./Building');

const building = new Building("This is the constructor for class Building...");
building.setDimensions(10, 5, 3);

console.log("Length:", building.length);
console.log("Width:", building.width);
console.log("Height:", building.height);
console.log("Perimeter:", building.perimeter());
console.log("Area:", building.area());

building.destructor();
