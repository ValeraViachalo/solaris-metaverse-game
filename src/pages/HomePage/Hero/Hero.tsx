import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import AnchorLink from '../../../components/AnchorLink/AnchorLink';
import HeroImage from '../../../images/hero/backgroung.jpg'

import "./Hero.scss";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
      <FullWidthBg
        url={HeroImage}
        alt="hero"
        classSection="hero"
      >
        <p className="small-text hero__under_header">
          Connect MetaMask wallet and get 150$ols Token as a gift, which will be
          capitalized in 2024.
        </p>
        <button className="hero__pop_up_button" />

        <div className="hero__download">
          <div className="hero__download_top">
            Has your application been approved yet?
            <h2 className="bold hero__download_title">
            <span className="hero__download_title_blur">Start</span>
            closed beta test
          </h2>
          </div>
          

          <button className="hero__download_button">Start the engine</button>

          <p className="bold hero__download_sub_title">
            WORLDWIDE RELEASE
            <br />
            09.06.2024
          </p>
        </div>

        <div className="about">
          <h1 className="about_title">
            <span className="bold">Solaris</span> Metaverse
          </h1>

          <h2 className="about_sub_title">
            Developed on Frostbite
          </h2>
          <h2 className="bold about__sub_title_adding">
            ONLY FOR PC
          </h2>

          <div className="about__buttons">
            <AnchorLink
              toSection='about-project'
              customClass="about_link"
            >
              Game experience
            </AnchorLink>
            <AnchorLink
              toSection='story'
              customClass="about_link"
            >
              Project information
            </AnchorLink>
            <AnchorLink
              toSection=''
              customClass="about_link_leviathan"
            >
              $100,000?
            </AnchorLink>
          </div>
        </div>

      </FullWidthBg>
    </section>
  );
};

export default Hero;
