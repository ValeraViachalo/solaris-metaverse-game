import { useState } from 'react';
import ContactsHead from './Head/Head';
import { AnimatePresence } from 'framer-motion';
import Socials from './Socials/Socials';

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <ContactsHead
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AnimatePresence>
        {isOpen && <Socials isOpen={isOpen}/>}
      </AnimatePresence>
    </main>
  );
};

export default Contacts;