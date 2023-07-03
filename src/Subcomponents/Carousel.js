import {A11y,Navigation,Pagination} from 'swiper'
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react'
import { SwiperNavButtons } from './SwiperNavButton';
import Case from "./Usecase";


const  Carousel = () => {
 
    return(
    
<>      
      <Swiper className='wrapper'
      modules={ [Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView="auto"
      >

          <SwiperSlide className="res-slide" > <Case image='images/one.png' header='Web Development Freelancers' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' btn0=' READ MORE '  /></SwiperSlide>

          <SwiperSlide className="res-slide" > <Case image='images/second.png' header='Small Housing & Domain Registration Companies' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' btn0=' READ MORE '  /></SwiperSlide>

         <SwiperSlide className="res-slide" > <Case image='images/three.png' header='Company Registries' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'  btn0=' READ MORE '  /></SwiperSlide>

          <SwiperSlide className="res-slide" > <Case image='images/one.png' header='Small Digital Agencies' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'  btn0=' READ MORE '  /></SwiperSlide> 

          <SwiperSlide className="res-slide" > <Case image='images/second.png' header='Other' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' btn0=' READ MORE '  /></SwiperSlide>

          
          
          <SwiperNavButtons />
 
      </Swiper>
</>
    )
}
export default  Carousel;






