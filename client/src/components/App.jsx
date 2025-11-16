import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import MomentsPage from "./pages/MomentsPage";
import Academic from "./pages/Academic";
import Contact from "./pages/Contact";

// Inline Footer component (simplified)
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2025 Kuhn. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moments" element={<MomentsPage />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
