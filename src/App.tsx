import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuemSomos from './Components/Quem-somos/quemsomos.jsx';
import Hero from './Components/Hero/Hero.jsx';
import CustomMarquee from './Components/Galeria/galeria.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Projects from "./Components/Projectos/projectos.tsx";
import Footer from './Components/footer/footer.jsx';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <QuemSomos/>
      <Projects />
      <CustomMarquee/>
      <Footer/>
    </>
  );
}

export default App;
