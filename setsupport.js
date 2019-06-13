

//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 600 };
var two = new Two(params).appendTo(elem);

//How can we use two.js's native bind method to run all this?
//are bindings ran in order?

var foreground = two.makeGroup();

function genLines(two) {
  const recWidth = 600;
  const lSideAlign = 0;
  var nextpos = 0;
  var x = 0;
  var y = 0;
  var rect = "";
  while(nextpos < 300) {
      x = Math.floor(Math.random()*5);
      y = Math.floor(Math.random()*13);
      rect = two.makeRectangle(lSideAlign,nextpos,recWidth,x)
      rect.fill = 'rgb(10, 10, 10)';
      nextpos = nextpos + y + x;
  }
  two.render();
  return
}

function genfrontscreen(two) {
  var recfront = two.makeRectangle(150,150,250,250);
  recfront.fill = "rgb(186, 241, 188)"
  let origin_x = 50;
  let origin_y = 50;


  two.render();
}

function callrender() {
  two.clear();
  genLines(two);
  genfrontscreen(two);
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

var i = 0;
for (i; i <= 5000; i++) {
//  sleep(50);
//  callrender();
setInterval(callrender,1000);
}
