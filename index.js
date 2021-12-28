module.exports.areaOfCircle = (radius) => Math.PI * radius * radius;
module.exports.perimeterOfCircle = (radius) => 2 * Math.PI * radius;
module.exports.areaOfSquare = (side) => side * side;
module.exports.perimeterOfSquare = (side) => 4 * side;
module.exports.areaOfRectangle = (length, breadth) => length * breadth;
module.exports.perimeterOfRectangle = (length, breadth) =>
  2 * (length + breadth);
module.exports.areaOfTriangle = (base, height) => 0.5 * base * height;
module.exports.perimeterOfTriangle = (sideone, sidetwo, sidethree) =>
  sideone + sidetwo + sidethree;
module.exports.areaOfParallelogram = (base, height) => base * height;
module.exports.perimeterOfParallelogram = (length, breadth) =>
  2 * (length + breadth);
