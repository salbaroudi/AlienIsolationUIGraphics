
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 300 };
var two = new Two(params).appendTo(elem);

//first, lets try a uniform distribution for our bar thickness and
//spacing. Just use Math.random()

function genLines(two) {
  two.clear();
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
      two.update()
      nextpos = nextpos + y + x;}
  return
}

function callgenLines() {
  genLines(two);
}

var i = 0;
for (i; i < 5000; i++) {
  setTimeout(callgenLines,50);
}
