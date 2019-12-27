import Component from '@components/scripts/base/Component';
import SliderSwiper from '@components/views/slider/swiper';

class Media extends Component {
    init() {
        const sliderEl = this.el.querySelector(`#${this.el.id}-slider`);
        if (sliderEl) {
            const slider = new SliderSwiper(sliderEl, this.attr);
            slider.init();
        }
    }
}

export default Media;
