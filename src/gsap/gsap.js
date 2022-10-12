import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// headline content animation
const mainHeadlineAnimation = {
    y: -30,
    duration: 0.4,
    opacity: 0,
}

window.addEventListener('load', () => {
    console.log('upload');
    return gsap.timeline().from('.main-headline__title', mainHeadlineAnimation)
    .from('.main-headline__subtitle', mainHeadlineAnimation)
    .from('.main-headline__button', mainHeadlineAnimation);
})

// animation other item

const itemScrollAnimation = {
    y: -30,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
        trigger: ".description__wrapper",
        start: "top bottom-=30%",
    }
}

function setAnimationItem(item, trigger) {
    return gsap.from(item, {
        ...itemScrollAnimation,
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom-=30%"
        }
    });
}

setAnimationItem('.description__text-item', '.description__wrapper');
setAnimationItem('.advantages__item', '.advantages__layout');