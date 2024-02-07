const hightLight=document.getElementById('hightLight');
const message=[
    ""
]
let messageIndex=0 ;
let charIndex=0;
function typing(messageIndex){
    let currentMess=message[messageIndex];
    if(charIndex<currentMess.length){
        let currentChar=currentMess.substring(0,charIndex+1)
        hightLight.textContent=currentChar;
        charIndex++;
    }
    setTimeout(typing,100,messageIndex);
}
typing(0);






// slide
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const slides =$$('.slide-move__item')
const slideUp = $('.slide-up')
const slideBack = $('.slide-back')
const widthSlide = $('.slide').clientWidth;
const slideMove =  $('.slide-move')
const maxSlide = widthSlide*2

var up = 0


function Up (){
    if(up < maxSlide){
        up += widthSlide
    }
    else{
        up=0
    }
   

    slides.forEach((tab,index) => {
        if(up === widthSlide){
            $('.slide-move__item.active').classList.remove('active')
            slides[1].classList.add('active')
        }if(up===maxSlide){
            $('.slide-move__item.active').classList.remove('active')
            slides[2].classList.add('active')

        }if(up===0){
            $('.slide-move__item.active').classList.remove('active')
            slides[0].classList.add('active')
        }
    })

    $('.slide-move__item.active').style.animation = `Slider linear 0.5s`
    
}

function Back (){
    if(up > 0){
        up -= widthSlide

    }
    else{
        up = maxSlide
    }
    // slideMove.style.transform = `translate3d(-${up}px, 0px, 0px)`
    slides.forEach((tab,index) => {
        if(up === widthSlide){
            $('.slide-move__item.active').classList.remove('active')
            slides[1].classList.add('active')
        }if(up===maxSlide){
            $('.slide-move__item.active').classList.remove('active')
            slides[2].classList.add('active')

        }if(up===0){
            $('.slide-move__item.active').classList.remove('active')
            slides[0].classList.add('active')
        }
    })
    $('.slide-move__item.active').style.animation = `SliderTT linear 0.5s`
    
    
}

// Sau 3s chuyển slide
let setTime;
const startInterval = () => {
    
    setTime = setInterval(function(){
        Up ()
    },5000)
}

startInterval();

slideUp.onclick = function(){
    Up ()
    clearInterval(setTime)
    setTimeout(startInterval(), 5000)
}

slideBack.onclick = function(){
    Back ()
    clearInterval(setTime)
    setTimeout(startInterval(), 5000)
}

function myclick(){
    document.getElementById("click-nav").classList.toggle("active-nav");
}
window.onclick=function(event){
    if(!event.target.matches('.icon-nav')){
        var down=document.getElementsByClassName("header-mobile__nav")
        var i;
        for( i=0 ; i<down.length; i++){
            var open =down[i];
                if(open.classList.contains('active-nav')){
                    open.classList.remove('active-nav');
                }
        }
    }
}



var header = document.querySelector(".header");
var btntop = document.querySelector(".btntop");
 
 
window.onscroll = function() {
    scrollFunction()
};



function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add('white-color')
        btntop.style.display = "flex";
    } else {
        header.classList.remove('white-color')
        btntop.style.display = "none";
    }
}


btntop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}