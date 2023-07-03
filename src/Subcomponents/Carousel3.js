import {A11y,Navigation,Pagination} from 'swiper'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react'
import { SwiperNavButtons } from './SwiperNavButton';
import Case2 from "./Partner";

const  Carousel3 = () => {
 
    return(
    
<>      
      <Swiper className='wrapper'
      modules={ [Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView="auto"
      >

          <SwiperSlide className="res-slide"><Case2 images='images/Rectangle 60.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/Rectangle 64.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/Rectangle 65.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/Group.png'/></SwiperSlide>         


          <SwiperNavButtons />
 
      </Swiper>
</>
    )
}
export default  Carousel3;


