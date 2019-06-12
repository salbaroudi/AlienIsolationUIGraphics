
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 300 };
var two = new Two(params).appendTo(elem);

function posupdate(x,y) {
  let choice = Math.floor(Math.random()*3.9999);
  if ((choice < 1) && (choice >= 0)){ //Up
    y -= 5;
  }
  else if ((choice < 2) && (choice >= 1)) { //Right
    x -= 5;
  }
  else if ((choice < 3) && (choice >= 2)) { //Down
    y += 5;
  }
  else if ((choice < 4) && (choice >= 3)) { //Left
    x += 5;
  }
  return [x,y];
}

function probjump(x,y) {
    jump = Math.floor(Math.random()*10);
    if (jump <=0.25) {
      x += (Math.floor(Math.random()*30)+Math.floor(Math.random()*-30))/2;
      y += (Math.floor(Math.random()*30)+Math.floor(Math.random()*-30))/2;
    }
    return [x,y];
}

function genrandwalk(two) {
  //Lets implement a basic random walk on the screen.
  //All we have to do is go up or down for the first iteration.
  //We set up number ranges for up/down left right.

  //up: 1, Right: 2, Down: 3, Left: 4
  var choice = 0;
  var curX = 150;
  var curY = 150;
  var jump = 1;
  var width = 1;
  var height = 1;

  for (var i = 0; i< 400; i++) {
      [curX,curY] = posupdate(curX,curY);
      [curX,curY] = probjump(curX,curY);
      width = Math.floor(Math.random()*8);
      height = Math.floor(Math.random()*8);
      rect = two.makeRectangle(curX,curY,2 + width, 2+ height);
      rect.fill = 'rgb(10, 10, 10)';
      two.update();
  }
}

//genrandwalk(two);

function tessshape(character,two,x,y) {
  var grouping = ""
  if (character == "F") {
    rect1 = two.makeRectangle(x,y,10,50);
    rect1.fill = 'rgb(10, 10, 10)';
    rect2 = two.makeRectangle(10+x,y-20,25,10);
    rect2.fill = 'rgb(10, 10, 10)';
    rect3 = two.makeRectangle(10+x,y,15,10);
    rect3.fill = 'rgb(10, 10, 10)';
    grouping = two.makeGroup(rect1,rect2,rect3);
    two.update();
  }
  else if (character == "T") {
    rect1 = two.makeRectangle(x,y,50,10);
    rect1.fill = 'rgb(10, 10, 10)';
    rect2 = two.makeRectangle(x,y+30,10,50);
    rect2.fill = 'rgb(10, 10, 10)';
    grouping = two.makeGroup(rect1,rect2);
    two.update();
  }
  return
}

var curX = 150;
var curY = 150;

tessshape("F",two,curX,curY);

for (var i = 0; i < 10; i++) {
  pathForce = Math.floor(Math.random()*5)
  coinFlip = Math.floor(Math.random()*2);
  var xShift = 0;
  var yShift = 0;
  if (coinFlip >= 1) {
    xShift = (Math.floor(Math.random()*100)+Math.floor(Math.random()*-100))/2;
  }
  else {
    yShift = (Math.floor(Math.random()*100)+Math.floor(Math.random()*-100))/2;
  }

  for (var j = 0; j < pathForce; j++) {
    curX += xShift;
    curY += yShift;
    tessshape("T",two,curX,curY);
  }
}
