
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 300 };
var two = new Two(params).appendTo(elem);

function posupdate(x,y) {
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
    choice = Math.floor(Math.random()*3.9999);
    [curX,curY] = posupdate(curX,curY);
    [curX,curY] = probjump(curX,curY);
    width = Math.floor(Math.random()*8);
    height = Math.floor(Math.random()*8);
    rect = two.makeRectangle(curX,curY,2 + width, 2+ height);
    rect.fill = 'rgb(10, 10, 10)';
    two.update();
}
