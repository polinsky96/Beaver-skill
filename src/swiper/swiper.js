import Swiper, { Autoplay } from 'swiper';
import 'swiper/scss';

export const swiper = new Swiper('.swiper', {
  modules: [Autoplay],
  autoplay: {
    disableOnInteraction: false
  },

  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
});