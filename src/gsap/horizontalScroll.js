import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = gsap.utils.toArray('.horizontal-scroller__item');

const itemProperty = gsap.getProperty(items[0]);
const itemWidth = itemProperty('clientWidth');
const itemMarginRight = itemProperty('marginRight')
const itemFullWidth = itemWidth + itemMarginRight;

const containerWidth = (itemFullWidth * items.length) - itemMarginRight;

const animationScroll = {
    x: - (containerWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-scroller",
        pin: true,
        scrub: 1,
        end: "+=" + containerWidth,
    }
}

gsap.to('.horizontal-scroller__container', animationScroll);