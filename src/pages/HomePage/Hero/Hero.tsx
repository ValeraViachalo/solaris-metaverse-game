import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import AnchorLink from '../../../components/AnchorLink/AnchorLink';
import HeroImage from '../../../images/home/backgroung.jpg'
import PopUp from './PopUp/PopUp';

import "./Hero.scss";

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
        <PopUp />

        <div className="hero__download">
          <div className="hero__download_top">
            Has your application been approved yet?
            <h2 className="bold hero__download_title">
            <span className="hero__download_title_blur">Start</span>
            closed beta test
          </h2>
          </div>
          

          <p className="bold hero__download_sub_title">
            WORLDWIDE RELEASE
            <br />
            {" "}
            09.06.2024
          </p>

          <button className="hero__download_button">Start the engine</button>
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
              toSection='#about-project'
              customClass="about_link"
            >
              Game experience
            </AnchorLink>
            <AnchorLink
              toSection='#story'
              customClass="about_link"
            >
              Project information
            </AnchorLink>
            <AnchorLink
              toSection='#leviathan'
              customClass="about_link_leviathan"
            >
              $100,000?
            </AnchorLink>
          </div>
        </div>

        <h1 className="hero__bottom_text big-text">
          ARE YOU READY FOR THE EVENT HORIZON?
        </h1>

      </FullWidthBg>
    </section>
  );
};

export default Hero;
