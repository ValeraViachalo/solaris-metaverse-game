import { Dispatch, FC, SetStateAction } from 'react';
import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import ContactsHeadBg from "../../../videos/Space.mp4";
import "./Head.scss";

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ContactsHead: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <section>
      <FullWidthBg
        type="video"
        url={ContactsHeadBg}
        classSection="contacts_head"
      >
        <h1 className="contacts_head__title">
          <span className="bigger">You{" "}</span>ARE{" "}
          <span className="bigger">NOT ALONE{" "}</span> IN THE{" "}
          <span className="bigger">S</span>OLARIS UNIVERSE!
        </h1>

      {!isOpen && (
        <h2>
          <button
            className="contacts_head__link"
            onClick={() => setIsOpen(true)}
          >
            CLICK TO FIND OUT MORE
          </button>
        </h2>
      )}
      </FullWidthBg>
    </section>
  );
};

export default ContactsHead;
