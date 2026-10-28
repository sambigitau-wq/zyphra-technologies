import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SchoolAid from "./components/SchoolAid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

/*
|--------------------------------------------------------------------------
| Page Transition
|--------------------------------------------------------------------------
| A subtle fade-in for each page change. No extreme sliding.
*/

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/*
|--------------------------------------------------------------------------
| Animated Routes
|--------------------------------------------------------------------------
*/

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/schoolaid" element={<PageTransition><SchoolAid /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

/*
|--------------------------------------------------------------------------
| Main Application
|--------------------------------------------------------------------------
*/

function App() {
  return (
    <Router>
      {/* 
        We use a flex column layout to ensure the Footer 
        always stays at the bottom, even on short pages.
      */}
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans antialiased">
        
        {/* Navigation */}
        <Navbar />

        {/* Main page content */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;