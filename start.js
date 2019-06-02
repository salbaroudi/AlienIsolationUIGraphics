var elem = document.getElementById('canvas');
var params = { width: 800, height: 800 };
var two = new Two(params).appendTo(elem);

for (i = 0; i < 10; i++) {
var rect = two.makeRectangle((10 + 20*i), 50, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

}

for (i = 0; i < 7; i++) {
var rect = two.makeRectangle((50 + 20*i), 70, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
}

for (i = 0; i < 5; i++) {
var rect = two.makeRectangle((30 + 20*i), 110, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
}

for (i = 0; i < 3; i++) {
var rect = two.makeRectangle((150 + 20*i), 150, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
}

for (i = 0; i < 7; i++) {
var rect = two.makeRectangle((270), (50 + 20*i), 100, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
}

for (i = 0; i < 7; i++) {
var rect = two.makeRectangle((170), (50 + 20*i), 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
}

var rect = two.makeRectangle((130), 190, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

var rect = two.makeRectangle((110), 170, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

var rect = two.makeRectangle((90), 190, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

var rect = two.makeRectangle((70), 170, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()

var rect = two.makeRectangle((10), 190, 20, 20);
rect.fill = 'rgb(10, 10, 10)';
two.update()
