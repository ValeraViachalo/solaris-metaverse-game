import { motion } from 'framer-motion';
import { FC } from 'react';
import SocialsLinks from '../../../data/Socials.json'

import './Socials.scss'

const section = {
  open: {
    display: 'block',
    top: '-20vh',
    width: "100%",
    height: "600px",
    transition: { duration: 0.7, type: "tween", ease: [0.76, 0, 0.24, 1] },
    transform: 'none',
    left: '0'
  },
  closed: {
    display: 'none',
    top: '110vh',
  }
};

type Props = {
  isOpen: boolean
}

const Socials: FC<Props> = ({ isOpen }) => {
  return (
    <motion.section
      className="socials"
      variants={section}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
    >
      <h1 className="bold socials__title">
        FOLLOW US ON SOCIAL MEDIA
      </h1>

      <ul className="socials__list">
        {SocialsLinks.map((currentLink, i) => {
          const {title, link, color} = currentLink

          return (
            <li key={i} className="socials__item">
              <a
                href={link}
              >
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </motion.section>
  );
}

export default Socials;