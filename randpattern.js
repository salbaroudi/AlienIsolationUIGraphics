
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 300 };
var two = new Two(params).appendTo(elem);


//Lets implement a basic random walk on the screen.
//All we have to do is go up or down for the first iteration.
//We set up number ranges for up/down left right.

//up: 1, Right: 2, Down: 3, Left: 4

var choice = 0;
var curX = 150;
var curY = 150;
for (var i = 0; i< 400; i++) {
    choice = Math.floor(Math.random()*3.9999);
    if ((choice < 1) && (choice >= 0)){ //Up
      curY -= 5;
    }
    else if ((choice < 2) && (choice >= 1)) { //Right
      curX -= 5;
    }
    else if ((choice < 3) && (choice >= 2)) { //Down
      curY += 5;
    }
    else if ((choice < 4) && (choice >= 3)) { //Left
      curX += 5;
    }
    rect = two.makeRectangle(curX,curY,5,5);
    rect.fill = 'rgb(10, 10, 10)';
    two.update();
}
