const prev = document.getElementById('btn-prev');
next = document.getElementById('btn-next');
slides = document.querySelectorAll('.slide');
dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active-slide');
    }
    slides[n].classList.add('active-slide');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active-slide');
    }
    dots[n].classList.add('active-slide');
}

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

let timer = setInterval(function() {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}, 2000);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);