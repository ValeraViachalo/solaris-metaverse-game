import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navigation.scss";

type BtnProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const menu = {
  open: {
    width: "max-content",
    height: "max-content",
    left: "-1.6vw",
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "10px",
    height: "10px",
    transition: {
      duration: 0.8,
      delay: 0.45,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const SubHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navigation">
      <motion.div
        className="navigation__menu"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {/* {isActive && <Options setIsActive={setIsActive} />} */}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};

const Button: FC<BtnProps> = ({ isActive, toggleMenu }) => {
  return (
    <div className="navigation__button">
      <motion.div
        className="navigation__button_slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Menu</p>
          </div>
        </div>
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Options = () => (
  <>
    <ul className="subheader__list">
      <li className="subheader__list_item">
        <a href="/" className="bold subheader__link">
          Buy resources
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          Buy weapons
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          Buy a spaceship
        </a>
      </li>
    </ul>
    <ul className="subheader__list">
      <li className="subheader__list_item">
        <a href="/" className="bold subheader__link">
          Auction
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          Dividends
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          Sell
        </a>
      </li>
    </ul>
    <ul className="subheader__list">
      <li className="subheader__list_item">
        <a href="/" className="bold subheader__link">
          ACCESSORIES
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          COMPANIONS
        </a>
      </li>
      <li className="subheader__list_item">
        <a href="/" className="subheader__link">
          COSMETICS
        </a>
      </li>
    </ul>
  </>
);

export default SubHeader;
