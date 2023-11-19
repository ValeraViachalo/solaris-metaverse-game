import { useEffect } from 'react';
import './Creators.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Creators = () => {

  return (
    <section className="creators">
      <div className="container">
        <h1 className="creators__title">
          AUTHORS OF THE PROJECT
        </h1>
        <h2 className="creators__sub_title">
          Bringing power to the people by creating an intergalactic metaverse with next-gen technologies.
        </h2>

        <main className="creators__lists">
          <div className="creators_leaders">
            <h2 className="creators__list_title">
              LEADERSHIP / COFOUNDERS
            </h2>
            <ul className="creators_list">
              <li className="creators__item">
                <p className="creators_name">
                  Michael Wagner
                </p>
                <p className="creators_position">
                  Chief Executive Officer
                </p>
              </li>
              <li className="creators__item">
                <p className="creators_name">
                  Abraham Floyd
                </p>
                <p className="creators_position">
                  Chief Product Officer
                </p>
              </li>
              <li className="creators__item">
                <p className="creators_name">
                  Jacob Floyd
                </p>
                <p className="creators_position">
                  Chief Technology Officer
                </p>
              </li>
            </ul>
            <h2>
              And more than 1500 employees worldwide
            </h2>
          </div>

          <div className="creators_investors">
            <h2 className="creators__list_title">
              INVESTORS / SPONSORS
            </h2>
            <p>
              CRAZYEVILCORP® / DeBank® / Nvidia® 
            </p>
          </div>

          <footer className="creators_footer">
            <h2 className="creators_footer__title creators__title">
              Join the team
            </h2>
            <div className="creators_footer__text">
              <p className="creators_footer__text_first">
                Join the metaverse frontier and create the world of the future with us.
              </p>
              <p>
                We’re always looking for people
                Exceptional abilities, talents and ways of thinking are signature characteristics that unite the interstellar team at Solaris MetaVersr
              </p>
            </div>

            <a
              href="mailto:JOBSSolarisMV@spacesol.com"
              className="creators_footer__link"
            >
              <span className="creators_footer__link_text">
                JOBSSolarisMV@spacesol.com
              </span>
            </a>
          </footer>
        </main>
      </div>
    </section>
  );
};

export default Creators;