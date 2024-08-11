const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show1');
        }
    })
});


const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer1.observe(el));