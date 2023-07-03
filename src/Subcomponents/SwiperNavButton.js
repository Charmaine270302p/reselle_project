import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper= useSwiper();

    return(
        <div className="swipernav-buttons">
            <button onClick={() => swiper.slidePrev()}>Prev</button>
            <button onClick={() => swiper.slideNext()}>Next</button>
        </div>

    );
};