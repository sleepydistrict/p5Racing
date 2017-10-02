var carAx = 0;
var carAy = true;
var carBx = 0;
var carBy = true;
var carCx = 0;
var carCy = true;
var carDx = 0;
var carDy = true;
var carEx = 0;
var carEy = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("grey");
  fill("blue");
  rect(carAx + 10, 55, 100, 25);
  fill("black");
  ellipse(carAx + 30, 85, 20, 20);
  ellipse(carAx + 90, 85, 20, 20);
  fill("red");
  rect(carBx + 10, 100, 100, 25);
  fill("black");
  ellipse(carBx + 30, 130, 20, 20);
  ellipse(carBx + 90, 130, 20, 20);
  fill("green");
  rect(carCx + 10, 150, 100, 25);
  fill("black");
  ellipse(carCx + 30, 180, 20, 20);
  ellipse(carCx + 90, 180, 20, 20);
  fill("pink");
  rect(carDx + 10, 200, 100, 25);
  fill("black");
  ellipse(carDx + 30, 230, 20, 20);
  ellipse(carDx + 90, 230, 20, 20);
  fill("orange");
  rect(carEx + 10, 250, 100, 25);
  fill("black");
  ellipse(carEx + 30, 280, 20, 20);
  ellipse(carEx + 90, 280, 20, 20);

  if (carAx <= 600 && carAy === true) {
    carAx += 5;
    if (carAx === 600) {
      carAy = false;
    }
  };
  if (carBx <= 600 && carBy === true) {
    carBx += 12;
    if (carBx === 600) {
      carBy = false;
    }
  };
  if (carCx <= 600 && carCy === true) {
    carCx += 10;
    if (carCx === 600) {
      carCy = false;
    }
  };
  if (carDx <= 600 && carDy === true) {
    carDx += 3;
    if (carDx === 600) {
      carDy = false;
    }
  };
  if (carEx <= 600 && carEy === true) {
    carEx += 15;
    if (carAx === 600) {
      carEy = false;
    }
  };
      // }else if(carAy === false) {
      //   carAx -= 5;
      //   if (carAx === 0) {
      //     carAy = true;
      //   }
    
}