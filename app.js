var elem = document.querySelector('.sec-2');
var flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true
});

document.getElementById("nextSection").addEventListener('click',function(){
    window.location.hash = "section3";

})

// document.getElementById("btnEffect").addEventListener('click',function(){
    

// })

const button = document.getElementById('btnEffect');
const popup = document.getElementById('divBlock');

button.addEventListener('click', function () {
    popup.classList.toggle('hidden');
});

const backdrop = document.getElementById('backdrop');

button.addEventListener('click', function () {
    popup.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
});

backdrop.addEventListener('click', function () {
    popup.classList.add('hidden');
    backdrop.classList.add('hidden');
});