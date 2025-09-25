import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Certificates from './Components/Certificates';

const PortfolioPage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
);

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

// Layout wrapper to conditionally render Header/Footer
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Hide header and footer on /certificates
  const hideHeaderFooter = location.pathname === '/certificates';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
