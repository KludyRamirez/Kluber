import { LandingProps } from '../types/LandingProps';
import Navbar from '../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import microsoftlogo from '../assets/images/microsoftlogo.svg';
import oraclelogo from '../assets/images/oraclelogo.svg';
import aviatrixlogo from '../assets/images/aviatrixlogo.svg';
import ciscologo from '../assets/images/ciscologo.svg';
import udemylogo from '../assets/images/udemylogo.svg';
import skillfrontlogo from '../assets/images/skillfrontlogo.svg';
import opswatlogo from '../assets/images/opswatlogo.svg';
import codeacademylogo from '../assets/images/codeacademylogo.svg';

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="bg-[#282828]">
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="spacer-large"></div>
          <h1 className="text-[3.150rem] text-[#f2f2f2] leading-[1.150]">
            Cybersecurity strategies for
            <br />
            breakthrough growth
            <br />
            Our data-centric approach ensures every
            <br />
            decision delivers measurable results
          </h1>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <div className=""></div>
          <div className="w-[100%] flex gap-8">
            <div className="cursor-pointer py-[0.50rem] px-[1.25rem] bg-[#f2f2f2] border-[1px] border-[#f2f2f2] hover:bg-transparent hover:text-[#f2f2f2]">
              Contact Us
            </div>
            <div className="cursor-pointer py-[0.50rem] px-[1.25rem] text-[#f2f2f2] border-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#282828]">
              Explore more
            </div>
          </div>
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2] font-[extra-light]">
            Clients working with us get 2x more from their marketing budget than
            the industry average.
          </div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-500"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <Swiper
            spaceBetween="72"
            slidesPerView="auto"
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img src={microsoftlogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={oraclelogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={aviatrixlogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={ciscologo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={skillfrontlogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={udemylogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={opswatlogo} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={codeacademylogo} />
            </SwiperSlide>
            {/* <SwiperSlide className="">
              <img src={skillfrontlogo} />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className="spacer-large"></div>
      </section>
      <section id="featured-blog"></section>
      <section id="projects"></section>
      <section id="certifications"></section>
      <section id="testimonials"></section>
    </>
  );
};

export default Landing;
