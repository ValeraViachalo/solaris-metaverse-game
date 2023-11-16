import { useState } from 'react';
import ContactsHead from './Head/Head';
import { AnimatePresence } from 'framer-motion';
import Socials from './Socials/Socials';
import Creators from './Creators/Creators';
import { Transition } from '../../components/Transition/Transition'

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <ContactsHead
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      
      <AnimatePresence>
        {isOpen && (
          <>
            <Socials isOpen={isOpen} />
            <Creators />
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

const TransitionedContacts = Transition(Contacts);

export default TransitionedContacts;
