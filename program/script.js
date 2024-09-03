const slideshow =document.querySelector('#slideshow');
const slides =document.querySelectorAll('.slide');
const prevbtn =document.querySelector('.prev');
const nextbtn =document.querySelector('.next');
let current= 0;
function nextSlide(){
    slides[current].style.display='none';
    current++;
    if(current>=slides.length){
        current=0;
    }
    slides[current].style.display='block';
}
function prevSlide(){
    slides[current].style.display='none';
    current--;
    if(current>=slides.length){
        current=slides.length-1;
    }
    slides[current].style.display='block';
}
nextbtn.addEventListener()
prevbtn.addEventListener('click',prevSlide);
setInterval(nextSlide,3000);
slides[0].style.display='block';