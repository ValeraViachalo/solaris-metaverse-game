import { FC, useState } from "react";
import { motion } from "framer-motion";
import SubHeaderMenu from '../../../../data/SubHeaderMenu.json'
import "./SubHeader.scss";
import classNames from 'classnames';

type BtnProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const SubHeader = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonContent = isClicked ? "**********" : "0.86908862 ETH";

  return (
    <div className="subheader">
    <div className="subheader__menu">
      <h2 className="subheader__logo">MARCKETPLACE SMV</h2>
      {SubHeaderMenu.map((currentCategory, i) => (
        <Menu title={currentCategory.title} key={i} links={currentCategory.links}/>
      ))}
    </div>
      <div
        className="subheader__button"
        onClick={handleClick}
      >
        {buttonContent}
      </div>
    </div>
  );
};

const menuAnim = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

type MenuProps = {
  title: string
  links: {
    text: string,
    path: string
  }[]
}

const Menu: FC<MenuProps> = ({title, links}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMouseMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div
      className="menu"
      onMouseEnter={toggleMouseMenu}
      onMouseLeave={toggleMouseMenu}
    >
      <div className={classNames('bold', 'menu__title',
        { 'menu__title--active': isActiveMenu }
      )}>
        {title}
      </div>
      <motion.ul
        className="menu__list"
        variants={menuAnim}
        animate={isActiveMenu ? "open" : "closed"}
        initial="closed"
      >
        {links.map(currentLink => (
          <li className="menu__list_item">
            <a
              href={currentLink.path}
              className="menu__link"
            >
              {currentLink.text}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SubHeader;
