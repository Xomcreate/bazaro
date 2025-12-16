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
import Sell from './MainComponents/Sell';
import Services from './MainComponents/Services';
import Register from './MainComponents/Register';
import Login from './MainComponents/Login';
import About from './MainComponents/About';
import Career from './MainComponents/Career';
import Terms from './MainComponents/Terms';
import Policy from './MainComponents/Policy';
import Orders from './MainComponents/Orders';
import TrackOrders from './MainComponents/TrackOrders';
import Wishlist from './MainComponents/Wishlist';
import Admin from './DashboardComponets/Admin';
import Seller from './DashboardComponets/Seller';
import Users from './DashboardComponets/Users';
import ForgetPassword from './MainComponents/ForgetPassword';
import VerifyCode from './MainComponents/VerifyCode';
import Pricing from './MainComponents/Pricing';
import Return from './MainComponents/Return';
import Report from './MainComponents/Report';
import Delivery from './MainComponents/Delivery';
import Install from './MainComponents/Install';
import Warranty from './MainComponents/Warranty';
import Invoice from './MainComponents/Invoice';
import FlashSales from './MainComponents/FlashSales';

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
          <Route path="/sell" element={<Sell />} />
          <Route path="/service" element={<Services/>} />
           <Route path="/register" element={<Register/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/login" element={<Login/>} />
               <Route path="/careers" element={<Career/>} />
               <Route path="/terms" element={<Terms/>} />
                <Route path="/privacy" element={<Policy/>} />
                 <Route path="/orders" element={<Orders/>} />
                  <Route path="/track-order" element={<TrackOrders/>} />
                   <Route path="/wishlist" element={<Wishlist/>} />
                  <Route path="/admin" element={<Admin/>} />
                     <Route path="/seller" element={<Seller/>} />
                       <Route path="/user" element={<Users/>} />
                        <Route path="/forget" element={<ForgetPassword/>} />
                          <Route path="/verify" element={<VerifyCode/>} />
                            <Route path="/pricing-plans" element={<Pricing/>} />
                            <Route path="/returns" element={<Return/>} />
                            <Route path="/report-product" element={<Report/>} />
                                <Route path="/delivery" element={<Delivery/>} />
                                 <Route path="/installation" element={<Install/>} />
                                   <Route path="/warranty-services" element={<Warranty/>} />
                                   <Route path="/invoice" element={<Invoice/>} />
                                    <Route path="/flashsale" element={<FlashSales/>} />
                    
                
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
