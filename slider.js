var images = [
  'business1.jpg',
  'trust1.jpg',
  'growth1.jpg'

];

var num = 0;
function next() {
  var slider = document.getElementById('slider');
  num++;
  if(num >= images.length){
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  var slider = document.getElementById('slider');
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}
