import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.jsx';
import Header from '../pages/Header.jsx';
import Footer from '../pages/Footer.jsx';

const Rutas = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Rutas;
