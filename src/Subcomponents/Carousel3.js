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

          <SwiperSlide className="res-slide"><Case2 images='images/techzim.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/techno.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/econet.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/netone.png'/></SwiperSlide>   
          <SwiperSlide className="res-slide"><Case2 images='images/cassava.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/union.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/825.png'/></SwiperSlide>
          <SwiperSlide className="res-slide"><Case2 images='images/263.png'/></SwiperSlide>        


          <SwiperNavButtons />
 
      </Swiper>
</>
    )
}
export default  Carousel3;


