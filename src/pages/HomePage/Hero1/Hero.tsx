import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import HeroImagePart1 from '../../../images/home/hero-part-1.png'
import HeroImagePart2 from '../../../images/home/hero-part-2.png'
import PopUp from './PopUp/PopUp';

import "./Hero.scss";
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* <FullWidthBg
        url={HeroImagePart1}
        alt="hero"
        classSection="hero"
        customClass="hero__image-top"
      > */}
      <ParalaxBackground />
        <p className="small-text hero__under_header">
          Connect MetaMask wallet and get 150$ols Token as a gift, which will be
          capitalized in 2024.
        </p>
        <PopUp />

        <div className="about">
          <h2 className="bold about_sub_title">
            WORLDWIDE RELEASE
            <br />
            {" "}
            09.06.2024
          </h2>
          <h2 className="about__title">
            Developed on Frostbite
          </h2>
          <h2 className="bold about__title_adding">
            ONLY FOR PC
          </h2>
        </div>
      {/* </FullWidthBg> */}
    </section>
  );
};

const ParalaxBackground = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom center',
          scrub: 0.001,
          markers: true,
        }
      })
      .to('.paralax__bottom', {
        bottom: '-2%',
        duration: 0.7
      })

  })

  return (
    <>
      <div className="paralax paralax__top" />
      <div className="paralax paralax__bottom" />
    </>
  )
}

export default Hero;
