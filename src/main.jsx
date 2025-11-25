import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './MainComponents/Header';
import Navbar from './MainComponents/Navbar';
import Home from './MainComponents/Home';
import Contact from './MainComponents/Contact';
import Loading from './MainComponents/Loading'; // Button-based loading screen
import Categories from './MainComponents/Categories';
import MarketPlace from './MainComponents/MarketPlace';
import Footer from './MainComponents/Footer';
import Shop from './MainComponents/Shop';
// import Marketplace from './MainComponents/Marketplace';

function App() {
  const [showApp, setShowApp] = useState(false); // Control showing main app

  // If the app is not yet entered, show Loading
  if (!showApp) {
    return <Loading onEnter={() => setShowApp(true)} />;
  }

  // After clicking the button, render the main app
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/marketplace" element={<MarketPlace />} />
           <Route path="/shop" element={<Shop />} />
         <Route path="/categories" element={<Categories />} />
        {/* Example for future routes */}
        {/* <Route path="/marketplace" element={<Marketplace />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
