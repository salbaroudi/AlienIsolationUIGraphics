
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 600, height: 600 };
var two = new Two(params).appendTo(elem);

//first, lets try a uniform distribution for our bar thickness and
//spacing. Just use Math.random()


const recWidth = 600;
const lSideAlign = 0;

var nextpos = 0;
var x = 0;
var y = 0;
var rect = "";

//unbounded loop if your not careful!
//Looking at the sample images, using a uniform random distribution is good
//enough!
//We also can't render every time we make a rectangle.
//We need a series of objects, and then render in one shot.
while(nextpos < 600) {
    x = Math.floor(Math.random()*6);
    y = Math.floor(Math.random()*11);
    rect = two.makeRectangle(lSideAlign,nextpos,recWidth,x)
    rect.fill = 'rgb(10, 10, 10)';
    two.update()
    nextpos = nextpos + y + x;
}
