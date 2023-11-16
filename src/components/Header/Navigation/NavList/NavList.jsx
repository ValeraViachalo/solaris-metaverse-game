import "./NavList.scss";
import { motion } from "framer-motion";
import { perspective } from "./anim";
import HeaderContent from "../../../../data/HeaderContent.json";
import { Link } from "react-router-dom";

function NavList({ setIsActive }) {
  return (
    <div className="nav">
      <div className="nav__body">
        {HeaderContent.map((currentLink, i) => {
          const { title, link, type } = currentLink;
          return (
            <div
              key={`b_${i}`}
              className="nav__linkContainer"
            >
              <motion.div
                className="nav__link"
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {type === 'link' ? (
                  <Link
                    to={link}
                    className="nav__link_item"
                    onClick={() => setIsActive(false)}
                  >
                    {title}
                  </Link>
                ) : (
                  <a 
                    href={link}
                    className="nav__link_item"
                    onClick={() => setIsActive(false)}
                    target="_blank"
                  >
                    {title}
                  </a>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavList;