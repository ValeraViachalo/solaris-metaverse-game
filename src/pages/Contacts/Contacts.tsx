import { useState } from 'react';
import ContactsHead from './Head/Head';
import { AnimatePresence } from 'framer-motion';
import Socials from './Socials/Socials';
import Creators from './Creators/Creators';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <main>
      <ContactsHead
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Socials isOpen={isOpen}></Socials>
      <Creators />
      {/* <AnimatePresence>
        {isOpen && <Socials isOpen={isOpen}/>}
      </AnimatePresence> */}
    </main>
  );
};

export default Contacts;