
//Basic canvas initialization, and a reference to it.
var elem = document.getElementById('canvas');
var params = { width: 800, height: 800 };
var two = new Two(params).appendTo(elem);


for (i = 0; i < 10; i++) {
var rect = two.makeRectangle((10 + 20*i), 50, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

}
