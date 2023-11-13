import { useContext } from "react";
import { ScrollContext } from "../../helpers/scrollContext";
// import { ScrollProvider } from "@/helpers/scrollProvider";
import  "./Header.scss";
import Navigation from './Navigation/Navigation';

const Header = () => {
  const scrollTo = useContext(ScrollContext);

  return (
    <header className="header">
      <div className="header__navigation">
        <Navigation />
      </div>

      <ul className="header__list">
        <li className="header__list_item">
          <a
            href="/"
            className="bold header__link"
          >
            smv
          </a>
        </li>
        <li className="header__list_item">
          <a
            href="/"
            className="header__link"
          >
            Connect wallet
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
