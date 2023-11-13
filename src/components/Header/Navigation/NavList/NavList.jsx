import "./NavList.scss";
import { motion } from "framer-motion";
import { perspective } from "./anim";
import HeaderContent from "../../../../data/HeaderContent.json";

function NavList() {
  return (
    <div className="nav">
      <div className="nav__body">
        {HeaderContent.map((currentLink, i) => {
          const { title, link } = currentLink;
          return (
            <div
              key={`b_${i}`}
              className="nav__linkContainer"
            >
              <motion.a
                href={link}
                className="nav__link"
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavList;