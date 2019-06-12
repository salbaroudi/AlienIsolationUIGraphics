

//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 600 };
var two = new Two(params).appendTo(elem);

//How can we use two.js's native bind method to run all this?
//are bindings ran in order?

var rect = two.makeRectangle(150,150,30,30);
rect.fill = 'rgb(10, 10, 10)';
two.update();


two.bind('render',renderfun).bind('pause',pausefun).play();

function renderfun() {
  if (rect.translation.y == 150) {
    rect.translation.set(0,100);
  }
  else if (rect.translation.y == 250) {
    rect.translation.set(0,-100);
  }
  return undefined;
}

function pausefun() {
  setTimeout(dummy,1000);
}

function dummy() {
  return undefined;
}

function updatefun() {
  two.update();
}
