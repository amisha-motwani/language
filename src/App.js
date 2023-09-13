import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </Router>
    </I18nextProvider>
  );
}

export default App;
