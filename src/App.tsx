import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage/HomePage";
import RoadMap from "./pages/RoadMap/RoadMap";
import Contacts from "./pages/Contacts/Contacts";
import TransitionedHome from './pages/HomePage/HomePage';
import TransitionedRoadMap from './pages/RoadMap/RoadMap';


function App() {
  return (
    <AnimatePresence mode="wait">
      <main className="app">
        <Header />

        <section className="app__section">
          <Routes>
            <Route
              path="/"
              element={<TransitionedHome />}
            />
            <Route
              path="home"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />

            <Route
              path="roadmap"
              element={<TransitionedRoadMap />}
            />

            <Route
              path="contacts"
              element={<Contacts />}
            />
          </Routes>
        </section>
      </main>
    </AnimatePresence>
  );
}

export default App;