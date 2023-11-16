import { useContext, useState } from "react";
import { ScrollContext } from "../../helpers/scrollContext";
// import { ScrollProvider } from "@/helpers/scrollProvider";
import "./Header.scss";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonContent = isClicked ? "SOON" : "CONNECT WALLET";

  const scrollTo = useContext(ScrollContext);

  return (
    <header className="header">
      <div className="header__navigation">
        <Navigation />
      </div>

      <ul className="header__list">
        <li className="header__list_item">
          <a href="/" className="bold header__link">
            smv
          </a>
        </li>
        <li className="header__list_item">
          <button className="header__link" onClick={handleClick}>
            {buttonContent}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
