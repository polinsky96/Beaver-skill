import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

gsap.to('.indicator-scroll__progress', {
    xPercent: 100,
    duration: 1,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        scrub: 1,
        start: "top top",
        end: "+=" + (scrollHeight - window.innerHeight)
    }
})