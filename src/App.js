import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<HomePage />} path='/' exact />
        <Route element={<Projects />} path='/projects' />
        <Route element={<Projects />} path='/projects:slug' />
        <Route element={<Contact />} path='/contact' />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
