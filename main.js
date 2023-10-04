const headerSlidesOffer = document.querySelectorAll('.baner__offer-text');

let i = 0;

const activeSlides = n => {
    for(headerSlideOffer of headerSlidesOffer){
        headerSlideOffer.classList.remove('active');
    }
    headerSlidesOffer[n].classList.add('active');
}
const prepareCurrentSlides = ind => {
    activeSlides(ind);
}
const nextSlides = () => {
    if(i == headerSlidesOffer.length - 1){
        i = 0;
        prepareCurrentSlides(i);
    }else{
        i++;
        prepareCurrentSlides(i);
    }
};

const intervals = setInterval(nextSlides, 4000);