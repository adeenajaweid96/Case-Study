var elem = document.querySelector('.sec-2');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true
});

document.getElementById("nextSection").addEventListener('click',function(){
    window.location.hash = "section3";

})