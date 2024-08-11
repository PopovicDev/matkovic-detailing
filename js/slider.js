//SLIDER
let slider = document.getElementById('slider');
let slider_len = slider.scrollWidth;
let slider_part = slider_len/3;
let slider_num = slider_part;
let slide1 = document.getElementById('slide1');
let paragraph = document.querySelectorAll('.p-inactive');
let paragraph_index = 0;
let paragraph_len = paragraph.length;
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let reviews = document.getElementById('reviews');
let review_len = reviews.scrollWidth;
let review_part = (review_len/5);
let review_num = 0;
let review4 = document.getElementById('review4');

setInterval(()=>{
    slider.scrollLeft = slider_num;
    slider_num += slider_part;
    switch(slider_num){
        case slider_part:
            Slide1();
            break;
        case slider_part*2:
            Slide2();
            break;
        case slider_len:
            Slide3();
            break;
    }
    if(slider_num == (slider_len)){
        slider_num = 0;
    }
},7000);

//SLIDE 1
slide1.querySelectorAll('.hidden').forEach(el => {
    el.classList.add('show');
});

let interval = setInterval(() => {
    if (paragraph_index < paragraph_len) {
        paragraph[paragraph_index].classList.add('p-active');
        paragraph_index++;
    } else {
        clearInterval(interval);
    }
}, 300);

let Slide1 = () => {
    slide3.querySelectorAll('.hidden').forEach(el => {
        el.classList.remove('show');
    });
    slide1.querySelectorAll('.hidden').forEach(el => {
        el.classList.add('show');
    });
    let interval1 = setInterval(() => {
    if (paragraph_index < paragraph_len) {
        paragraph[paragraph_index].classList.add('p-active');
        paragraph_index++;
    } else {
        clearInterval(interval1);
    }
}, 300)};

//SLIDE 2
let Slide2 = () => {
    slide1.querySelectorAll('.hidden').forEach(el => {
        el.classList.remove('show');
    });
    slide2.querySelectorAll('.hidden').forEach(el => {
        el.classList.add('show');
    });
    slide2.style.backgroundImage = `url('../pictures/slider2_hl.png')`;
}

//SLIDE 3

let Slide3 = () => {
    slide2.querySelectorAll('.hidden').forEach(el => {
        el.classList.remove('show');
    });
    slide3.querySelectorAll('.hidden').forEach(el => {
        el.classList.add('show');
    });
    slide2.style.backgroundImage = `url('../pictures/slider2.png')`;
    for(let i=0;i<6;i++){
        paragraph[i].classList.remove('p-active');
    }
    paragraph_index = 0;
}

//SCROLL BUTTON

let ScrollLeft = (el) => {
    reviews.scrollLeft -= review_part;
}

let ScrollRight = (el) => {
    reviews.scrollLeft += review_part;
}

//FAQ
let buttons = document.querySelectorAll('.question-q i');

buttons.forEach(el => {
    el.addEventListener("click", ()=>{
        (el.parentElement).parentElement.querySelector('.answer').classList.toggle('active');
        el.classList.toggle('active1');
    })
})

//GALLERY

let gallery = document.querySelector('.gallery');
let pictures = Array.from(document.querySelectorAll('.pictures img'));
let pic_len = pictures.length;

let ShowPictures = () => {
    if(pic_len >= 6){
        for(let i=0;i<6;i++){
            pictures[i].style.display = 'block';
        }
        pic_len -= 6;
        pictures.splice(0, 6);
        if(pic_len == 0){
            document.getElementById('pic_button').style.display = 'none';
        }
    }
    else{
        for(let j=0;j<pic_len;j++){
            pictures[j].style.display = 'block';
        }
        pictures.splice(0, pic_len);
        pic_len = 0;
    }
}