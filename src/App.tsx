import { Routes, Route, Navigate, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Home from './pages/HomePage/HomePage';
import RoadMap from './pages/RoadMap/RoadMap';
import Contacts from './pages/Contacts/Contacts';
import MarketPlace from './pages/MarketPlace/MarketPlace';
import React, { useEffect, useState } from 'react';
import PreLoader from './components/PreLoader/PreLoader';


function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setIsLoaded(true);
        document.body.style.cursor = "default";        
      }, 2000);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
}, [isLoaded]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/roadmap",
      element: <RoadMap />
    },
    {
      path: "/contacts",
      element: <Contacts />
    },
    {
      path: "/marketplace",
      element: <MarketPlace/>
    },
  ]);

  const location = useLocation();

  if (!element) return null

  return (
    <>
      {isLoading && (<PreLoader isLoading={isLoaded}/>)}
      <main className="app">
          <Header />

          <section className="app__section">
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, { key: location.pathname })}
          </AnimatePresence>
            
          </section>
        </main>
    </>
  );
}

export default App;
