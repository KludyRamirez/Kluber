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
import tcmcert from '../assets/images/tcmcert.png';
import webdev from '../assets/images/webdev.jpg';
import ocibadge from '../assets/images/ocibadge.svg';
import ocidmbadge from '../assets/images/ocidmbadge.svg';
import ociaibadge from '../assets/images/ociaibadge.svg';
import ociaiprobadge from '../assets/images/ociaiprobadge.svg';
import sc900badge from '../assets/images/sc900badge.svg';
import tcmbadge from '../assets/images/tcmbadge.svg';
import ofsabadge from '../assets/images/ofsabadge.svg';
import icipbadge from '../assets/images/icipbadge.svg';
import cyberbadge from '../assets/images/cyberbadge.svg';
import cyberbadgecolor from '../assets/images/cyberbadgecolor.svg';
import python1badge from '../assets/images/python1badge.svg';
import python1badgecolor from '../assets/images/python1badgecolor.svg';
import python2badge from '../assets/images/python2badge.svg';
import js1badge from '../assets/images/js1badge.svg';
import js2badge from '../assets/images/js2badge.svg';
import acebadge from '../assets/images/acebadge.svg';
import skillfrontbadge from '../assets/images/skillfrontbadge.svg';
import plvosaproj from '../assets/images/plvosaproj.png';
import mlacproj from '../assets/images/mlacproj.png';

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="bg-[#282828] relative">
        <img
          className="absolute top-0 left-0 w-full h-full opacity-[0.16]"
          src={dots}
        />
        <div className="max-w-[86.8125rem] px-[1.25rem] mx-auto relative z-20">
          <div className="spacer-large"></div>
          <div className="spacer-large"></div>
          <h1 className="text-[3.525rem] leading-[1.275]">
            <span className="text-[#f2f2f2] font-[regular]">
              <span className="">Expertise refined</span>
              <br />
              <span className="light-sweep text-[#919191]">
                through years of pressure
              </span>
            </span>
          </h1>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <div className="w-[100%] flex gap-8">
            <div className="cursor-pointer py-[0.75rem] px-[1.75rem] custom-btn">
              Contact me
            </div>
            <div className="cursor-pointer py-[0.75rem] px-[1.75rem] reverse-btn">
              Explore more
            </div>
          </div>
          <div className="spacer-large"></div>
          <div className="w-full h-[1px] bg-gray-400"></div>
          <div className="spacer-small"></div>
          <div className="text-[#f2f2f2] font-[extra-light]">
            These are the organizations and institutions that have issued my
            certifications.
          </div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <Swiper
            spaceBetween="72"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              639: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 4,
              },
              1023: {
                slidesPerView: 5,
              },
              1279: {
                slidesPerView: 7,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="hero-swiper"
          >
            <SwiperSlide className="">
              <div className="w-full h-full flex justify-center items-center">
                <img src={aviatrix} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full flex justify-center items-center">
                <img src={oracle} />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={udemy} />
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
              <img src={azure} />
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
            <span className="font-[regular] black-sweep">
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
            spaceBetween="20"
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
          <div className="text-[#f2f2f2]">Certifications and Badges</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#f2f2f2] leading-[1.275]">
            <span className="">Check out my certifications</span>
            <br />
            <span className="text-[#919191] font-[regular] light-sweep">
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
            spaceBetween="20"
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full p-2">
                <img
                  src={ociai}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />

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
              <div className="w-full h-full p-2">
                <img
                  src={ociaiassoc}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />

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
              <div className="w-full h-full p-2">
                <img
                  src={sc900}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />
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
              <div className="w-full h-full p-2">
                <img
                  src={webdev}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />

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
              <div className="w-full h-full p-2">
                <img
                  src={tcmcert}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />
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
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent badges
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          {/* <Swiper
            spaceBetween="20"
            slidesPerView={4}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full p-2 relative">
                <div className="shen aspect-[3/2] bg-white/10 backdrop-blur-md shadow-lg rounded-md">
                  <img
                    src={ocifabadge}
                    className="p-2 cursor-pointer aspect-[3/2]"
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
              <div className="w-full h-full p-2 relative">
                <div className="shen aspect-[3/2] bg-white/10 backdrop-blur-md shadow-lg rounded-md">
                  <img
                    src={ociaibadge}
                    className="p-2 cursor-pointer aspect-[3/2]"
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
            <SwiperSlide>
              <div className="w-full h-full p-2 relative">
                <div className="shen aspect-[3/2] bg-white/10 backdrop-blur-md shadow-lg rounded-md">
                  <img
                    src={sc900badge}
                    className="cursor-pointer aspect-[3/2]"
                  />
                </div>

                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300 rounded-md">
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
              <div className="w-full h-full p-2 relative">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="shen aspect-[3/2] bg-white/10 backdrop-blur-md shadow-lg rounded-md">
                    <img
                      src={acebadge}
                      className="cursor-pointer aspect-[3/2]"
                    />
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 24, 2024</span>
                  <span>|</span>
                  <span>by Aviatrix</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Multicloud Network Associate
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="shen aspect-[3/2] bg-white/10 backdrop-blur-md shadow-lg rounded-md">
                    <img
                      src={tcmbadge}
                      className="cursor-pointer aspect-[3/2]"
                    />
                  </div>
                </div>
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
          </Swiper> */}
          <div className="w-full flex">
            <div className="w-[25%] flex justify-start items-start border-r-[1px] border-b-[1px] border-[#3f3f3f] text-[#f2f2f2]">
              <span className="ml-2 mt-4">Cisco Academy</span>
            </div>
            <div className="w-[75%] flex flex-wrap justify-start items-center gap-x-4 gap-y-8 border-b-[1px] border-[#3f3f3f] p-4">
              <div className="cursor-pointer w-[148px] h-[148px] relative group">
                <img
                  src={cyberbadgecolor}
                  className="absolute top-0 left-0 p-2"
                />
                <img
                  src={cyberbadge}
                  className="relative group-hover:hidden p-2"
                />
              </div>
              <div className="cursor-pointer w-[148px] h-[148px] relative group">
                <img
                  src={python1badgecolor}
                  className="absolute top-0 left-0 p-2 invisible group-hover:visible"
                />
                <img
                  src={python1badge}
                  className="relative group-hover:hidden p-2"
                />
              </div>
              <div className="w-[148px] h-[148px] p-2">
                <img src={python2badge} className="" />
              </div>
              <div className="w-[148px] h-[148px] p-2">
                <img src={js1badge} className="" />
              </div>
              <div className="w-[148px] h-[148px] p-2">
                <img src={js2badge} className="" />
              </div>
              <div className="w-[148px] h-[148px] p-2">
                <img src={js2badge} className="" />
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[25%] flex justify-start items-start border-r-[1px] border-b-[1px] border-[#3f3f3f] text-[#f2f2f2]">
              <span className="ml-2 mt-4">Oracle Corporation</span>
            </div>
            <div className="w-[75%] flex flex-wrap justify-start items-center gap-x-4 gap-y-8 border-b-[1px] border-[#3f3f3f] p-4">
              <div className="w-[148px] h-[148px]">
                <img src={ociaiprobadge} className="" />
              </div>
              <div className="w-[148px] h-[148px]">
                <img src={ociaibadge} className="" />
              </div>
              <div className="w-[148px] h-[148px]">
                <img src={ocidmbadge} className="" />
              </div>
              <div className="w-[148px] h-[148px]">
                <img src={ocibadge} className="" />
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[25%] flex justify-start items-start border-r-[1px] border-b-[1px] border-[#3f3f3f] text-[#f2f2f2]">
              <span className="ml-2 mt-4">OPSWAT Academy</span>
            </div>
            <div className="w-[75%] flex flex-wrap justify-start items-center gap-x-4 gap-y-8 border-b-[1px] border-[#3f3f3f] p-4">
              <div className="w-[148px] h-[148px]">
                <img src={ofsabadge} className="" />
              </div>
              <div className="w-[148px] h-[148px]">
                <img src={icipbadge} className="" />
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[25%] flex justify-start items-start border-r-[1px] border-b-[1px] border-[#3f3f3f] text-[#f2f2f2]">
              <span className="ml-2 mt-4">Microsoft Corporation</span>
            </div>
            <div className="w-[75%] flex flex-wrap justify-start items-center gap-6 border-b-[1px] border-[#3f3f3f] p-4">
              <div className="w-[148px] h-[148px]">
                <img src={sc900badge} className="" />
              </div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[25%] flex justify-start items-start border-r-[1px] border-[#3f3f3f] text-[#f2f2f2]">
              <span className="ml-2 mt-4">Aviatrix Academy</span>
            </div>
            <div className="w-[75%] flex flex-wrap justify-start items-center gap-6 border-[#3f3f3f] p-4">
              <div className="w-[148px] h-[148px]">
                <img src={acebadge} className="" />
              </div>
            </div>
          </div>
          <div className="spacer-large"></div>
        </div>
      </section>
      {/* <section id="projects" className="bg-[#282828] relative">
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
            <span className="text-[#919191] font-[regular] light-sweep">
              These works aspires to be best
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
            spaceBetween="20"
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
              <div className="w-full h-full p-2">
                <img
                  src={plvosaproj}
                  className="cursor-pointer aspect-[3/2] hover:aspect-[1/1] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  PLV OSA Reprimand Hub: A web-based digital hub where the
                  pamantasan can handle student cases, offenses, and violations.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2">
                <img
                  src={mlacproj}
                  className="cursor-pointer aspect-[1/1] hover:aspect-[3/2] z-20 radiating-glow transition-hover duration-[500ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  MLAC: A web-based application where parents of MLAC students
                  can dynamically handle their children's attendance on their
                  therapies every week.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2">
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
              <div className="w-full h-full p-2">
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
      </section> */}
      {/* <section id="testimonials" className="relative">
        <img className="absolute bottom-0 w-full" src={dotunder} />
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Testimonials</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            Insights from mentors <br />
            <span className="text-[#282828] font-[regular] black-sweep">
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
            spaceBetween="20"
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
      </section> */}
    </>
  );
};

export default Landing;
