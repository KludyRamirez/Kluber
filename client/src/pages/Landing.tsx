import { LandingProps } from '../types/LandingProps';
import Navbar from '../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import microsoft from '../assets/images/microsoft.svg';
import oracle from '../assets/images/oracle.svg';
import aviatrix from '../assets/images/aviatrix.svg';
import tcm from '../assets/images/tcm.svg';
import udemy from '../assets/images/udemy.svg';
import codecademy from '../assets/images/codecademy.svg';
import azure from '../assets/images/azure.svg';
import appbrewery from '../assets/images/appbrewery.svg';
import dots from '../assets/images/dots.webp';
import dotunder from '../assets/images/dotunder.svg';
import sc900 from '../assets/images/sc900.png';
import ociai from '../assets/images/ociai.png';
import ociaiassoc from '../assets/images/ociaiassoc.png';
import webdev from '../assets/images/webdev.jpg';
import ociaiprobadge from '../assets/images/ociaiprobadge.png';
import ociaibadge from '../assets/images/ociaibadge.png';
import sc900badge from '../assets/images/sc900badge.svg';

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="bg-[#282828] relative">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-[0.20]"
          src={dots}
        />
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto relative z-20">
          <div className="spacer-large"></div>
          <div className="spacer-large"></div>
          <h1 className="text-[3.75rem] leading-[1.275]">
            <span className="text-[#f2f2f2] font-[regular]">
              <span className="">Expertise refined</span>
              <br />
              <span className="">through years of pressure</span>
            </span>
          </h1>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <div className="w-[100%] flex gap-8">
            <div className="cursor-pointer py-[0.75rem] px-[1.75rem] bg-[#f2f2f2] border-[1px] border-[#f2f2f2] hover:bg-transparent hover:text-[#f2f2f2]">
              Contact Me
            </div>
            <div className="cursor-pointer py-[0.75rem] px-[1.75rem] text-[#f2f2f2] border-[1px] border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#282828]">
              Explore more
            </div>
          </div>
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2] font-[extra-light]">
            These are the organizations and institutions that have issued my
            certifications.
          </div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-400"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <Swiper
            spaceBetween="64"
            slidesPerView="auto"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="hero-swiper"
          >
            <SwiperSlide className="">
              <img src={aviatrix} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={oracle} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={azure} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={microsoft} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={tcm} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={appbrewery} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={udemy} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={codecademy} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="spacer-large"></div>
      </section>
      <section id="featured-blog" className="bg-[#efefef]">
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Blogs</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            <span className="">Our field evolves rapidly</span>
            <br />
            <span className="text-[#282828] font-[regular] text-gray-400">
              These blogs help you stay ahead
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
            Recent blogs
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="28"
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide className="">
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[2/3] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="certifications" className="bg-[#282828]">
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2]">Certifications</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#f2f2f2] leading-[1.275]">
            <span className="">Check out my certifications</span>
            <br />
            <span className="text-[#919191] font-[regular]">
              These are the proofs of hardwork
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent certifications
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="28"
            slidesPerView={4}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] group relative">
                  <img
                    src={ociai}
                    className="aspect-[3/2] block group-hover:hidden relative z-20"
                  />
                  <img
                    src={ociaiprobadge}
                    className="absolute inset-0 m-auto z-10"
                  />
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 27, 2024</span>
                  <span>|</span>
                  <span>by Oracle</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Oracle Cloud Infrastructure 2024 Generative AI Certified
                  Professional
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[1/1] group relative">
                  <img
                    src={ociaiassoc}
                    className="aspect-[1/1] block group-hover:hidden relative z-20"
                  />
                  <img
                    src={ociaibadge}
                    className="absolute inset-0 m-auto z-10"
                  />
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 10, 2024</span>
                  <span>|</span>
                  <span>by Oracle</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Oracle Cloud Infrastructure 2023 AI Certified Foundations
                  Associate
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full">
                <div className="aspect-[2/3] group relative">
                  <img
                    src={sc900}
                    className="aspect-[2/3] block group-hover:hidden relative z-20"
                  />
                  <img
                    src={sc900badge}
                    className="p-16 absolute inset-0 m-auto z-10"
                  />
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>October 11, 2023</span>
                  <span>|</span>
                  <span>by Microsoft</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Microsoft Certified: Security, Compliance, and Identity
                  Fundamentals
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] group">
                  <img
                    src={webdev}
                    className="aspect-[3/2] group-hover:invisible"
                  />
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>April 19, 2024</span>
                  <span>|</span>
                  <span>by London App Brewery</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  The Complete 2024 Web Development Bootcamp
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <img src={webdev} className="aspect-[1/1]" />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 22, 2024</span>
                  <span>|</span>
                  <span>by TCM Academy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Practical Web Application Security and Testing
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="projects" className="bg-[#282828] relative">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-[0.20]"
          src={dots}
        />
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2]">Projects</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#f2f2f2] leading-[1.275]">
            Check out my projects <br />
            <span className="text-[#919191] font-[regular]">
              These works inspires to create
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent projects
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="28"
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide className="">
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[2/3] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="testimonials" className="relative">
        <img className="absolute bottom-0 right-0" src={dotunder} />
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Testimonials</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            Insights from mentors <br />
            <span className="text-[#282828] font-[regular]">
              These responses keep me grounded
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
            Recent testimonials
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="28"
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide className="">
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <div className="spacer-large"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Landing;
