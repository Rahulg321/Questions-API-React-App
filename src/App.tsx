import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import ApiSection from "./components/ApiSection";
import CsvViewer from "./components/CsvViewer";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Certifications from "./components/Certifications";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTA from "./components/CTA";
import ApiDocsPage from "./pages/ApiDocsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero />
                <ApiSection />
                <CsvViewer />
                <Features />
                <Demo />
                <Certifications />
                <Pricing />
                <Testimonials />
                <About />
                <CTA />
              </motion.div>
            }
          />
          <Route path="/api/*" element={<ApiDocsPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
