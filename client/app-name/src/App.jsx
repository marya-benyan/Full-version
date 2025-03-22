import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import ProductCategories from './components/ProductCategories';
import FeaturesSection from './components/FeaturesSection';
import HeroBanner from './components/HeroBanner';
import TrandyProducts from './components/TrandyProducts';
import NewsletterSection from './components/NewsletterSection';
import JustArrivedSection from './components/JustArrivedSection';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShopPage from './pages/ShopPage';
import Profile from './pages/Profile';
import ShoppingCart from './pages/ShoppingCart';
import Wishlist from './pages/Wishlist';
import ShopDetail from './pages/ShopDetail';
import CreateCustomProduct from "./pages/CreateCustomProduct";
import OrderHistory from "./pages/OrderHistory";
import PaymentPage from "./pages/PaymentPage";
const App = () => {
  const [message, setMessage] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // إخفاء الرسالة بعد 3 ثوانٍ
  };

  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        {message && <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center">{message}</div>}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <FeaturesSection />
                <ProductCategories />
                <PromoBanner />
                <TrandyProducts />
                <NewsletterSection />
                <JustArrivedSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login showMessage={showMessage} />} />
          <Route path="/register" element={<Register showMessage={showMessage} />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/ShopDetail" element={<ShopDetail />} />
          <Route path="/custom-product" element={<CreateCustomProduct />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;