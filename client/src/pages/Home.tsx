import React, { useState, useEffect, useRef } from 'react';
import { Home } from '../types/Home';
import Navbar from '../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import microsoft from '../assets/images/microsoft.svg';
import opswat from '../assets/images/opswat.svg';
import oracle from '../assets/images/oracle.svg';
import coursera from '../assets/images/coursera.svg';
import codecademy from '../assets/images/codecademy.svg';
import azure from '../assets/images/azure.svg';
import appbrewery from '../assets/images/appbrewery.svg';
import sc900 from '../assets/images/sc900.png';
import ociaipro from '../assets/images/ociaipro.png';
import ociai from '../assets/images/ociai.png';
import ocidm from '../assets/images/ocidm.png';
import oci from '../assets/images/oci.png';
import ocibadge from '../assets/images/ocibadge.svg';
import ocibadgecolor from '../assets/images/ocibadgecolor.svg';
import ocidmbadge from '../assets/images/ocidmbadge.svg';
import ocidmbadgecolor from '../assets/images/ocidmbadgecolor.svg';
import ociaibadge from '../assets/images/ociaibadge.svg';
import ociaibadgecolor from '../assets/images/ociaibadgecolor.svg';
import ociaiprobadge from '../assets/images/ociaiprobadge.svg';
import ociaiprobadgecolor from '../assets/images/ociaiprobadgecolor.svg';
import sc900badge from '../assets/images/sc900badge.svg';
import sc900badgecolor from '../assets/images/sc900badgecolor.svg';
import tcmbadge from '../assets/images/tcmbadge.svg';
import tcmbadgecolor from '../assets/images/tcmbadgecolor.svg';
import ofsabadge from '../assets/images/ofsabadge.svg';
import ofsabadgecolor from '../assets/images/ofsabadgecolor.svg';
import icipbadge from '../assets/images/icipbadge.svg';
import icipbadgecolor from '../assets/images/icipbadgecolor.svg';
import cyberbadge from '../assets/images/cyberbadge.svg';
import cyberbadgecolor from '../assets/images/cyberbadgecolor.svg';
import python1badge from '../assets/images/python1badge.svg';
import python1badgecolor from '../assets/images/python1badgecolor.svg';
import python2badge from '../assets/images/python2badge.svg';
import python2badgecolor from '../assets/images/python2badgecolor.svg';
import js1badge from '../assets/images/js1badge.svg';
import js1badgecolor from '../assets/images/js1badgecolor.svg';
import js2badge from '../assets/images/js2badge.svg';
import js2badgecolor from '../assets/images/js2badgecolor.svg';
import acebadge from '../assets/images/acebadge.svg';
import acebadgecolor from '../assets/images/acebadgecolor.svg';
import aviatrixcert from '../assets/images/aviatrixcert.png';
import icipcert from '../assets/images/icipcert.png';
import ofsacert from '../assets/images/ofsacert.png';
import reactcert from '../assets/images/reactcert.jpg';
import completecybercert from '../assets/images/completecybercert.jpg';
import plvosaproj from '../assets/images/plvosaproj.png';
import plvosaprojlogo from '../assets/images/plvosaprojlogo.png';
import mlacproj from '../assets/images/mlacproj.png';
import mlacprojlogo from '../assets/images/mlacprojlogo.svg';
import bpiaiaproj from '../assets/images/bpiaiaproj.png';
import bpiaiaprojlogo from '../assets/images/bpiaiaprojlogo.svg';
import aiaproj from '../assets/images/aiaproj.png';
import aiaprojlogo from '../assets/images/aiaprojlogo.svg';
import aiathproj from '../assets/images/aiathproj.png';
import apdtechexam from '../assets/images/apdtechexam.png';
import apdtechexamlogo from '../assets/images/apdtechexamlogo.png';
import galatictechexamsproj from '../assets/images/galatictechexamsproj.svg';
import galaticprojlogo from '../assets/images/galaticprojlogo.png';
import regformproj from '../assets/images/regformproj.png';
import tcmcert from '../assets/images/tcmcert.png';
import webdev from '../assets/images/webdev.jpg';
import bitbucket from '../assets/images/bitbucket.svg';
import StarsCanvas from '../components/Background/StarBackground';

import {
  FaBootstrap,
  FaCloud,
  FaCode,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaDollarSign,
  FaFacebook,
  FaGift,
  FaGithub,
  FaHtml5,
  FaInbox,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaShieldHalved,
  FaVuejs,
} from 'react-icons/fa6';

import { SiOpenai } from 'react-icons/si';
import BubbleEffect from '../utils/BubbleEffect';

const HomePage: React.FC<Home> = () => {
  const [isHeroSectionActive, setIsHeroSectionActive] = useState(false);

  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroSectionActive(entry.isIntersecting);
      },
      { threshold: 0.9 }
    );

    const heroSection = heroSectionRef.current;

    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        heroObserver.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <>
      <StarsCanvas />
      <Navbar isHeroSectionActive={isHeroSectionActive} />
      <section id="hero" className="relative" ref={heroSectionRef}>
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
              Recruit me
            </div>
            <div className="cursor-pointer py-[0.75rem] px-[1.75rem] reverse-btn">
              Download CV
            </div>
          </div>
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2] font-[extra-light]">
            These are the organizations and institutions that have issued my
            certifications.
          </div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <div className="spacer-xs"></div>
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
              <img src={oracle} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={microsoft} />
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
            <SwiperSlide className="">
              <img src={bitbucket} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={coursera} />
            </SwiperSlide>
            <SwiperSlide className="">
              <img src={opswat} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="spacer-large"></div>
      </section>
      <section id="blogs" className="bg-white relative z-20">
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
      <section id="experiences">
        <div className="max-w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2]">Experiences</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3c3c3c]"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#f2f2f2] leading-[1.275]">
            <span className="">Check out my medals</span>
            <br />
            <span className="text-[#919191] font-[regular] light-sweep">
              These are proof of commitment
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3c3c3c]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent experiences
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <div className="w-full flex justify-start gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[15%] flex justify-center items-start">
                <div className="w-[14px] h-[14px] flex justify-center items-center bg-gradient-to-b from-[#0FFF50] to-green-600 rounded-[50%]"></div>
              </div>
              <div className="w-[1px] h-[85%] bg-[#3f3f3f]"></div>
            </div>
            <div className="w-[100%] flex flex-col items-start gap-2">
              <div className="text-white text-[14px] leading-none tracking-wide pb-[8px] mt-[1px]">
                July 2024 - Present
              </div>

              <div className="text-[24px] text-white">
                Software Engineer at GALATIC Events Corp.
              </div>

              <ul>
                <li className="text-[16px] text-[#919191] tracking-wide">
                  Leads development and management of PAGCOR's online gaming
                  platforms (e.g., LakiWin, OCMS),utilizing Vue.js/Nuxt.js,
                  Storybook.js, Pug.js, Cypress, and Jest.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Chosen as one of the key engineers to collaborate with
                  international developers on a major large scale project
                  focused on back-office systems.
                </li>
              </ul>
            </div>
          </div>
          <div className="spacer-medium"></div>
          <div className="w-full flex justify-start gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[15%] flex justify-center items-start">
                <div className="w-[14px] h-[14px] flex justify-center items-center bg-gradient-to-b from-white to-[#919191] rounded-[50%]"></div>
              </div>
              <div className="w-[1px] h-[85%] bg-[#3f3f3f]"></div>
            </div>
            <div className="w-[100%] flex flex-col items-start gap-2">
              <div className="text-white text-[14px] leading-none tracking-wide pb-[8px] mt-[1px]">
                January 2024 - July 2024
              </div>

              <div className="text-[24px] text-white">
                Full Stack Developer at Pamantasan ng Lungsod ng Valenzuela
              </div>

              <ul>
                <li className="text-[16px] text-[#919191] tracking-wide">
                  Developed a web application that successfully managed up to
                  12,000 student affairs records and processed more than 7,000
                  students’ cases and appeals at Pamantasan ng Lungsod ng
                  Valenzuela.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Chosen as one of the key engineers to collaborate with
                  international developers on a major large scale project
                  focused on back-office systems.
                </li>
              </ul>
            </div>
          </div>
          <div className="spacer-medium"></div>
          <div className="w-full flex justify-start gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-[15%] flex justify-center items-start">
                <div className="w-[14px] h-[14px] flex justify-center items-center bg-gradient-to-b from-white to-[#919191] rounded-[50%]"></div>
              </div>
              <div className="w-[1px] h-[85%] bg-[#3f3f3f]"></div>
            </div>
            <div className="w-[100%] flex flex-col items-start gap-2">
              <div className="text-white text-[14px] leading-none tracking-wide pb-[8px] mt-[1px]">
                March 2023 - December 2023
              </div>

              <div className="text-[24px] text-white">
                Junior Web Developer at Asia Pacific Digital
              </div>

              <ul>
                <li className="text-[16px] text-[#919191]">
                  Leads development and management of PAGCOR's online gaming
                  platforms (e.g., LakiWin, OCMS),utilizing Vue.js/Nuxt.js,
                  Storybook.js, Pug.js, Cypress, and Jest.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191]">
                  Chosen as one of the key engineers to collaborate with
                  international developers on a major large scale project
                  focused on back-office systems.
                </li>
              </ul>
            </div>
          </div>
          <div className="spacer-xs"></div>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="projects" className="bg-white relative">
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Projects</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            Check out my projects <br />
            <span className="text-[#919191] font-[regular] black-sweep">
              These works aspires to be best
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
            Recent projects
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="20"
            slidesPerView={3}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#9b1c21] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={bpiaiaprojlogo}
                      className="w-[260px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={bpiaiaproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                  <div className="text-[#282828] cursor-pointer group-hover:underline">
                    BPI AIA
                  </div>
                </a>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  The website covers insurance plans, company info, wellness
                  programs, and support.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>

                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#d4003b] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={aiaprojlogo}
                      className="w-[220px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <img
                      src={aiaproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  AIA PH
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  The website covers insurance plans, company info, wellness
                  programs, and support.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#d4003b] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={aiaprojlogo}
                      className="w-[220px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.aia.co.th/th" target="_blank">
                    <img
                      src={aiathproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  AIA TH
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  The website provides insurance plans, company info, wellness
                  programs, and support.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer group">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#87fdff] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={plvosaprojlogo}
                      className="w-[90px] h-[90px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={plvosaproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  PLV OSA Reprimand Hub
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  A web-based digital hub where the pamantasan can handle
                  student cases, offenses, and violations.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer group">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#F4BB44] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={mlacprojlogo}
                      className="w-[200px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={mlacproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">MLAC</div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  A web-based application where parents of MLAC students can
                  dynamically handle their children's attendance on their
                  therapies every week.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaPython size={16} />
                    <div className="mt-[2px] tracking-wide">Python</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer group">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#d21045] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={apdtechexamlogo}
                      className="w-[100px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={apdtechexam}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  GrowthOps Technical Exam
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  I completed a technical assessment at GrowthOps where I built
                  the necessary components and retrieved data from a web
                  service.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer group">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#0054a6] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={galaticprojlogo}
                      className="w-[200px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={galatictechexamsproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  Galatic Technical Exams
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  This exams measure my skills on HTML, CSS, SCSS, and its core
                  principles and my techniques on front-end development.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a
                    href="https://galatic-first-card-assessment.netlify.app/"
                    target="_blank"
                  >
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link 1</div>
                    </div>
                  </a>

                  <a
                    href="https://galatic-second-card-assessment.netlify.app/"
                    target="_blank"
                  >
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link 2</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaHtml5 size={16} />
                    <div className="mt-[2px] tracking-wide">HTML</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaCss3 size={16} />
                    <div className="mt-[2px] tracking-wide">CSS</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaSass size={16} />
                    <div className="mt-[2px] tracking-wide">SASS</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="relative cursor-pointer group">
                  <div className="absolute flex justify-center items-center top-0 left-0 bg-[#673098] w-full h-full group-hover:bg-transparent transition-group duration-[400ms] ease-in-out">
                    <img
                      src={galaticprojlogo}
                      className="w-[200px] group-hover:opacity-0 transition-group duration-[400ms] ease-in-out"
                    />
                  </div>
                  <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                    <img
                      src={regformproj}
                      className="opacity-0 group-hover:opacity-100 cursor-pointer aspect-[3/2] z-20 transition-group duration-[400ms] ease-in-out"
                    />
                  </a>
                </div>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] group-hover:underline">
                  Registration Page Exam
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  A registration form built on Vue 2 and Nuxt 2 for Galatic
                  Events Corporation.
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <a href="https://www.aia.com.ph/en/" target="_blank">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                      <div className="mt-[2px] tracking-wide">Link</div>
                    </div>
                  </a>

                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaVuejs size={16} />
                    <div className="mt-[2px] tracking-wide">Vue.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 border-[1px] border-gray-300 group-hover:border-[#282828] text-[14px] text-[#282828] gap-2 group-hover:bg-[#282828] group-hover:text-white">
                    <FaSass size={16} />
                    <div className="mt-[2px] tracking-wide">SASS</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="bc" className="bg-[#282828]/30">
        <div className="max-w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#f2f2f2]">Badges and Certifications</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#f2f2f2] leading-[1.275]">
            <span className="">Check out my medals</span>
            <br />
            <span className="text-[#919191] font-[regular] light-sweep">
              These are proofs of commitment
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent badges
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>

          <Swiper
            spaceBetween="20"
            // autoplay={{
            //   delay: 1400,
            //   disableOnInteraction: false,
            // }}
            loop={true}
            breakpoints={{
              639: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1279: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="badges-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={ociaiprobadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={ociaiprobadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={ociaibadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={ociaibadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={ocidmbadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={ocidmbadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 09, 2023</span>
                    <span>|</span>
                    <span>by Oracle</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    Oracle Cloud Data Management 2023 Certified Foundations
                    Associate
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaDatabase
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Data
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={ocibadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={ocibadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 08, 2023</span>
                    <span>|</span>
                    <span>by Oracle</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    Oracle Cloud Infrastructure 2023 Certified Foundations
                    Associate
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={sc900badge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={sc900badgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={tcmbadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={tcmbadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={icipbadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={icipbadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 25, 2024</span>
                    <span>|</span>
                    <span>by OPSWAT Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    OPSWAT Introduction to Critical Infrastructure Protection
                    (ICIP)
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={ofsabadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={ofsabadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 25, 2024</span>
                    <span>|</span>
                    <span>by OPSWAT Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    OPSWAT File Security Associate (OFSA)
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={acebadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={acebadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 24, 2024</span>
                    <span>|</span>
                    <span>by Aviatrix Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    Multicloud Network Associate
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={cyberbadge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={cyberbadgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 11, 2024</span>
                    <span>|</span>
                    <span>by Cisco Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">
                    Introduction to Cybersecurity
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={js1badge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={js1badgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 11, 2024</span>
                    <span>|</span>
                    <span>by Cisco Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">JavaScript Essentials 1</div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={js2badge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={js2badgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 11, 2024</span>
                    <span>|</span>
                    <span>by Cisco Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">JavaScript Essentials 2</div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={python1badge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={python1badgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 14, 2024</span>
                    <span>|</span>
                    <span>by Cisco Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">Python Essentials 1</div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 relative group">
                <div className="w-full flex justify-center">
                  <img
                    src={python2badge}
                    className="cursor-pointer aspect-[3/2] z-20 group-hover:hidden"
                  />
                  <img
                    src={python2badgecolor}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
                  />
                </div>
                <div className="relative z-20">
                  <div className="spacer-small"></div>
                  <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                    <span>June 14, 2024</span>
                    <span>|</span>
                    <span>by Cisco Academy</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#f2f2f2]">Python Essentials 2</div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#f2f2f2] font-[regular]">
            Recent certifications
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <Swiper
            spaceBetween="20"
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            // loop={true}
            breakpoints={{
              639: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1279: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="certifications-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <div className="w-full flex justify-center">
                  <img
                    src={ociaipro}
                    className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={ociai}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={ocidm}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 09, 2024</span>
                  <span>|</span>
                  <span>by Oracle</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Oracle Cloud Data Management 2023 Certified Foundations
                  Associate
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaDatabase
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Data
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={oci}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 08, 2024</span>
                  <span>|</span>
                  <span>by Oracle</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Oracle Cloud Infrastructure 2023 Certified Foundations
                  Associate
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={sc900}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={webdev}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={tcmcert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={aviatrixcert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={icipcert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 22, 2024</span>
                  <span>|</span>
                  <span>by OPSWAT Academy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  Introduction to Critical Infrastructure Protection (ICIP)
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <FaGift size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Gift
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={ofsacert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>June 25, 2024</span>
                  <span>|</span>
                  <span>by OPSWAT Academy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  OPSWAT File Security Associate (OFSA)
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={reactcert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>July 29, 2023</span>
                  <span>|</span>
                  <span>by Academind and Udemy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  React - The Complete Guide 2025 (incl. Next.js, Redux)
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={completecybercert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>July 28, 2024</span>
                  <span>|</span>
                  <span>by Nathan House and Udemy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">
                  The Complete Cyber Security Course : Hackers Exposed
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
                    <FaDollarSign
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Paid
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="w-full h-full p-2">
                <img
                  src={learnjavascriptcoursecert}
                  className="cursor-pointer aspect-[3/2] grayscale hover:aspect-[1/1] hover:grayscale-0 z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-300">
                  <span>August 1, 2024</span>
                  <span>|</span>
                  <span>by Codecademy</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#f2f2f2]">Learn JavaScript</div>
              </div>
            </SwiperSlide> */}
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>

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
      <footer id="footer" className="bg-[#282828]/30 relative">
        <div className="w-full flex justify-between items-center bg-transparent sm:hidden">
          <div
            style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
            className="w-[33%] py-[60px] sm:py-[30px] bg-white"
          ></div>
          <div
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            className="w-[33%] py-[60px] sm:py-[30px] bg-white"
          ></div>
        </div>

        <div className="w-full bg-white">
          <div className="max-w-[86.8125rem] px-[1.25rem] mx-auto relative z-20">
            <div className="spacer-xs"></div>
            <div className="spacer-small"></div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
            <div className="w-full flex flex-col justify-start items-center">
              <span className="text-[48px] text-[#282828] font-[semi-bold]">
                Let's Connect
              </span>
              <div className="spacer-medium"></div>
              <div className="flex justify-center">
                <input
                  className="w-[400px] h-[50px] border-[1px] border-[#282828] px-4 focus:outline-none bg-[#fcfcfc]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="spacer-small"></div>
              <div className="flex justify-center">
                <textarea
                  className="w-[400px] h-[120px] border-[1px] border-[#282828] p-4 focus:border-none bg-[#fcfcfc]"
                  placeholder="Write some message..."
                />
              </div>
              <div className="spacer-small"></div>
              <div className="cursor-pointer py-[0.75rem] w-[400px] footer-btn">
                Recruit me
              </div>
              <div className="spacer-small"></div>
              <div className="spacer-medium"></div>
              <div className='flex justify-center items-center gap-4 text-[#282828]'>
                <FaLinkedin size={32} className='cursor-pointer'/>
                <FaGithub size={32} className='cursor-pointer'/>
                <FaInbox size={32} className='cursor-pointer'/>
                <FaFacebook size={32} className='cursor-pointer'/>
              </div>
            </div>
            <div className="spacer-xs"></div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
          </div>
        </div>
        <div className="w-full flex justify-center bg-white">
          <div>
            <BubbleEffect />
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
