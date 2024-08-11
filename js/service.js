let intro = document.querySelector('.intro-pic');

setTimeout(()=>{
    intro.style.backgroundImage = intro.dataset.url;
},100);

setTimeout(()=>{
    if(window.scrollY == 0){
        window.scrollTo(0, 850);
    }
},4000);