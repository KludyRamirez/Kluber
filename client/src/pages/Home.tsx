import React, { useState, useEffect, useRef } from 'react';
import { Home } from '../types/Home';
import Navbar from '../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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
import mlacproj from '../assets/images/mlacproj.png';
import bpiaiaproj from '../assets/images/bpiaiaproj.png';
import aiaproj from '../assets/images/aiaproj.png';
import aiathproj from '../assets/images/aiathproj.png';
import tcmcert from '../assets/images/tcmcert.png';
import webdev from '../assets/images/webdev.jpg';
import bitbucket from '../assets/images/bitbucket.svg';
import StarsCanvas from '../components/Background/StarBackground';
import dotunder from '../assets/images/dotunder.svg';

import {
  FaAnglesUp,
  FaBootstrap,
  FaCloud,
  FaCode,
  FaDatabase,
  FaDocker,
  FaDollarSign,
  FaFacebook,
  FaGift,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaJava,
  FaLink,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaRegEnvelope,
  FaShieldHalved,
} from 'react-icons/fa6';

import { HiOutlineBriefcase } from 'react-icons/hi2';

import { SiOpenai } from 'react-icons/si';

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
      {/* <section id="blogs" ref={heroSectionRef} className="bg-[#efefef]">
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
      </section> */}
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
                <li className="text-[16px] text-[#919191] light-sweep tracking-wide">
                  Leads development and management of PAGCOR's online gaming
                  platforms (e.g., LakiWin, OCMS),utilizing Vue.js/Nuxt.js,
                  Storybook.js, Pug.js, Cypress, and Jest.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
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
                <li className="text-[16px] text-[#919191] light-sweep tracking-wide">
                  Developed a web application that successfully managed up to
                  12,000 student affairs records and processed more than 7,000
                  students’ cases and appeals at Pamantasan ng Lungsod ng
                  Valenzuela.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
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
                <li className="text-[16px] text-[#919191] light-sweep tracking-wide">
                  Leads development and management of PAGCOR's online gaming
                  platforms (e.g., LakiWin, OCMS),utilizing Vue.js/Nuxt.js,
                  Storybook.js, Pug.js, Cypress, and Jest.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
                  Guides the team in reviewing more than 26 pull requests,
                  delivering valuable feedback that significantly enhanced code
                  quality and maintainability compared to earlier practices.
                </li>

                <li className="text-[16px] text-[#919191] light-sweep">
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
      <section id="projects" className="bg-[#dedede] relative">
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Projects</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-[#0000001a]"></div>
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
          <div className="w-full h-[1px] bg-[#0000001a]"></div>
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
                <a href="https://www.bpi-aia.com.ph/en/" target="_blank">
                  <img
                    src={bpiaiaproj}
                    className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in"
                  />
                </a>
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                  <span>November 21, 2024</span>
                  <span>|</span>
                  <span>by Kludy Ramirez</span>
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828] cursor-pointer group-hover:underline">
                  BPI AIA
                </div>
                <div className="spacer-xs"></div>
                <div className="text-[#282828]">
                  The website covers insurance plans, company info, wellness
                  programs, and support.
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-4">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <FaGithub size={16} />
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center text-[14px] text-[#282828] gap-2 hover:underline">
                    <FaLink size={16} />
                    <div className="mt-[2px] tracking-wide">Live URL</div>
                  </div>
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <img
                  src={aiaproj}
                  className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in"
                />
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaGithub size={16} />
                    <div className="mt-[2px] tracking-wide">Github</div>
                  </div>
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full h-[1px] bg-[#0000001a]"></div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <img
                  src={aiaproj}
                  className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in"
                />
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaGithub size={16} />
                    <div className="mt-[2px] tracking-wide">Work</div>
                  </div>
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaJava size={16} />
                    <div className="mt-[2px] tracking-wide">Java</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full h-full p-2 group">
                <img
                  src={plvosaproj}
                  className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in"
                />
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaGithub size={16} />
                    <div className="mt-[2px] tracking-wide">Work</div>
                  </div>
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full p-2 group">
                <img
                  src={mlacproj}
                  className="cursor-pointer aspect-[3/2] z-20 transition-hover duration-[400ms] ease-in"
                />
                <div className="spacer-small"></div>
                <div className="flex align-items gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
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
                <div className="spacer-small"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaGithub size={16} />
                    <div className="mt-[2px] tracking-wide">Work</div>
                  </div>
                </div>
                <div className="spacer-xs"></div>
                <div className="w-full flex flex-wrap justify-start items-start gap-2">
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaReact size={16} />
                    <div className="mt-[2px] tracking-wide">React.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaBootstrap size={16} />
                    <div className="mt-[2px] tracking-wide">Bootstrap</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaDocker size={16} />
                    <div className="mt-[2px] tracking-wide">Docker</div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-white/20 group-hover:bg-[#282828] text-[14px] text-[#282828] gap-2 group-hover:text-[#efefef]">
                    <FaNodeJs size={16} />
                    <div className="mt-[2px] tracking-wide">Node.js</div>
                  </div>
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
                <div className="text-[#282828]">
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
                <div className="text-[#282828]">
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section>
      <section id="bc" className="bg-[#282828]/40">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaDatabase
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Data
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={16} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={16}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <SiOpenai
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      AI / ML
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaDatabase
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Data
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Completion
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCloud size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Cloud
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaCode size={14} className="group-hover:text-[#282828]" />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Development
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#FFD700] text-[14px] text-gray-300 gap-2">
                    <div className="w-[10px] h-[10px] rounded-50 bg-gray-300 rounded-[50%] group-hover:bg-[#282828]"></div>
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Certification
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#92E8FF] text-[14px] text-gray-300 gap-2">
                    <FaShieldHalved
                      size={14}
                      className="group-hover:text-[#282828]"
                    />
                    <div className="mt-[2px] tracking-wide group-hover:text-[#282828]">
                      Security
                    </div>
                  </div>
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#a0a0a0]/10 group-hover:bg-[#0FFF50] text-[14px] text-gray-300 gap-1">
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
      <footer id="footer" className="bg-[#282828]/40 relative">
        <div className="w-full flex justify-between items-center bg-transparent sm:hidden">
          <div
            style={{ clipPath: 'polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
            className="w-[33%] py-[60px] sm:py-[30px] bg-[#efefef]"
          ></div>
          <div
            style={{
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            className="w-[33%] py-[60px] sm:py-[30px] bg-[#efefef]"
          ></div>
        </div>

        <div className="w-full bg-[#efefef]">
          <div className="max-w-[86.8125rem] px-[1.25rem] mx-auto relative z-20">
            <div className="spacer-small hidden sm:block"></div>
            <div className="w-full flex justify-between items-center sm:flex-col sm:justify-start sm:gap-4 sm:pt-4">
              <div className="flex items-center">
                <span className="text-[16px] text-[#282828] font-[semi-bold] leading-none">
                  Klubbr
                </span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:underline">
                <FaAnglesUp size={14} className="text-[#282828] -mt-[4px]" />
                <span className="text-[16px] text-[#282828]">Back to top</span>
              </div>
            </div>

            <div className="spacer-small"></div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="spacer-small"></div>
            <div className="w-full flex justify-between items-center sm:flex-col sm:justify-start sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[16px] text-[#282828] mt-1">
                  Made by{' '}
                  <span className="font-[semi-bold]">
                    Kludy Ramirez &#10022;
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaFacebook
                  size={24}
                  className="text-[#505050] hover:text-[#282828] cursor-pointer"
                />
                <FaInstagram
                  size={24}
                  className="text-[#505050] hover:text-[#282828] cursor-pointer"
                />
                <FaLinkedin
                  size={24}
                  className="text-[#505050] hover:text-[#282828] cursor-pointer"
                />
                <FaRegEnvelope
                  size={24}
                  className="text-[#505050] hover:text-[#282828] cursor-pointer"
                />
                <FaGithub
                  size={24}
                  className="text-[#505050] hover:text-[#282828] cursor-pointer"
                />
              </div>
            </div>
            <div className="spacer-large"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
