import { Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/HomePage/HomePage';

function App() {
  return (
    <AnimatePresence>
      <main className="app">
        <Header />

        <section className="app__section">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="home" element={<Navigate to="/" replace />} />

            {/* <Route
              path="roadmap"
              element={<RoadMap />}
            /> */}
          </Routes>
        </section>
      </main>
    </AnimatePresence>
  );
}

export default App;
