
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-black overflow-x-hidden">
      <Header />
      <Hero />
      <Products />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
