import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from '../src/landing_page/home/HomePage'
import AboutPage from '../src/landing_page/about/AboutPage';
import PricingPage from '../src/landing_page/pricing/PricingPage';
import ProductPage from '../src/landing_page/products/ProductPage';
import SupportPage from '../src/landing_page/support/SupportPage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <HomePage />
      <AboutPage/>
      <PricingPage/>
      <ProductPage/>
      <SupportPage/>
    </div>
  </React.StrictMode>
);
