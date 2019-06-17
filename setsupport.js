//Basic canvas initialization, and a reference to it.
//var elem = document.getElementById('canvas');
//var params = { width:600, height: 600, type: Two.Types["svg"] };
//var two = new Two(params).appendTo(elem);

var two = new Two({
          type: Two.Types["svg"],
          fullscreen: true,
        }).appendTo(document.body);


var fps = 5; //Number between 1 and 60.
var frameLimit = 100;
var n = 0;

function renderrecurse(n) {
  if (n < frameLimit) {
    two.clear();
    genLines(two);
    genfrontscreen(two);
    two.render();
    setTimeout(renderrecurse,Math.round(1000/fps),(n+1));
  }
}
//How can we use two.js's native bind method to run all this?
//are bindings ran in order?

var foreground = two.makeGroup();

function genLines(two) {
  var recWidth = 600; //Why off by a factor of two??
  var lSideAlign = 300; //shapes are positined by centroid! not Top left!!!
  var nextpos = 0;
  var x = 0;
  var y = 0;
  var rect = "";
  while(nextpos < 600) {
      x = Math.floor(Math.random()*5);
      y = Math.floor(Math.random()*13);
      rect = two.makeRectangle(lSideAlign,nextpos,recWidth,x)
      rect.fill = 'rgb(10, 10, 10)';
      nextpos = nextpos + y + x;
  }
}

function tessshape(character,two,x,y) {
  var grouping = "";
  let base = 3; //pixels
  if (character == "F") {
    rect1 = two.makeRectangle(x,y,base,6*base);
    rect1.fill = 'rgb(5, 5, 5)';
    rect2 = two.makeRectangle(7+x,y-7,5*base,base);
    rect2.fill = 'rgb(5, 5, 5)';
    rect3 = two.makeRectangle(5+x,y,3*base,base);
    rect3.fill = 'rgb(5, 5, 5)';
    grouping = two.makeGroup(rect1,rect2,rect3);
    two.update();
  }
  else if (character == "T") {
    rect1 = two.makeRectangle(x,y,50,10);
    rect1.fill = 'rgb(5, 5, 5)';
    rect2 = two.makeRectangle(x,y+30,10,50);
    rect2.fill = 'rgb(5, 5, 5)';
    grouping = two.makeGroup(rect1,rect2);
    two.update();
  }
  return
}


function genfrontscreen(two) {
  var recfront = two.makeRectangle(300,300,500,500);
  recfront.fill = "rgb(186, 241, 188)"
  let curX = 150;
  let curY = 150;

  for (var i = 0; i < 10; i++) {
    pathForce = Math.floor(Math.random()*3)
    coinFlip = Math.floor(Math.random()*2);
    var xShift = 0;
    var yShift = 0;
    var scale = 50;
    if (coinFlip >= 1) {
      xShift = (Math.floor(Math.random()*scale)+Math.floor(Math.random()*-scale))/2;
    }
    else {
      yShift = (Math.floor(Math.random()*scale)+Math.floor(Math.random()*-scale))/2;
    }

    for (var j = 0; j < pathForce; j++) {
      curX += xShift;
      curY += yShift;
      tessshape("F",two,curX,curY);
    }
  }



}

renderrecurse(0);
