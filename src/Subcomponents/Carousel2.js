import {A11y,Navigation,Pagination} from 'swiper'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react'
import { SwiperNavButtons } from './SwiperNavButton';
import Case1 from "./Testimonials";

const  Carousel2 = () => {
 
    return(
    
<>      
      <Swiper className='wrapper'
      modules={ [Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView="auto"
      >

          <SwiperSlide className="res-slide" > 
          <Case1 images='images/Rectangle 16.png' header='Jane Doe' subheader='Company Name' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                        /></SwiperSlide>

          <SwiperSlide className="res-slide" > 
          <Case1 images='images/Rectangle 16.png' header='Jane Doe' subheader='Company Name' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                        /></SwiperSlide>

      
          <SwiperSlide className="res-slide" > 
          <Case1 images='images/Rectangle 16.png' header='Jane Doe' subheader='Company Name' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
                        /></SwiperSlide>
          
          
          <SwiperNavButtons />
 
      </Swiper>
</>
    )
}
export default  Carousel2;




