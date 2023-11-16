import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import TransitionedHome from "./pages/HomePage/HomePage";
import TransitionedRoadMap from "./pages/RoadMap/RoadMap";
import TransitionedContacts from './pages/Contacts/Contacts';
import TransitionedMarketPlace from './pages/MarketPlace/MarketPlace';

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="popLayout">
      <main className="app">
        <Header />

        <section className="app__section">
          <Routes location={location} key={location.pathname}>
            <Route index element={<TransitionedHome />} />

            <Route path="/roadmap" element={<TransitionedRoadMap />} />

            <Route path="/contacts" element={<TransitionedContacts />} />

            <Route path="/marketplace" element={<TransitionedMarketPlace />} />
          </Routes>
        </section>
      </main>
    </AnimatePresence>
  );
}

export default App;
