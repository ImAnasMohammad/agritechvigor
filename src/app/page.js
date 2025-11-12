'use client';
import React, { useState } from 'react';
import { Sprout, FileText, Truck, Leaf, Menu, X } from 'lucide-react';

// Logo Component
const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <svg width="50" height="50" viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12">
        {/* Brown diamond/mountain shapes */}
        <path d="M30 20 L50 5 L50 35 Z" fill="#A0764B" stroke="#1a3a2e" strokeWidth="2"/>
        <path d="M50 5 L70 20 L50 35 Z" fill="#8B6239" stroke="#1a3a2e" strokeWidth="2"/>
        
        {/* Green leaf/sprout shape */}
        <path d="M25 50 Q25 70 40 80 Q45 83 50 83 Q55 83 60 80 Q75 70 75 50 L50 50 Z" 
              fill="#4ADE80" stroke="#1a3a2e" strokeWidth="2"/>
      </svg>
      <h1 className="text-2xl md:text-3xl font-bold text-white">Agritech Vigor</h1>
    </div>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-emerald-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-sm lg:text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="hover:text-green-300 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-emerald-800 rounded-lg transition-colors z-50 relative"
            onClick={toggleMenu}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="block py-3 px-4 hover:bg-emerald-800 rounded-lg transition-colors duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] bg-cover bg-center" 
             style={{
               backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('data:image/svg+xml,%3Csvg width=\"1200\" height=\"600\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect fill=\"%23456B3E\" width=\"1200\" height=\"600\"/%3E%3C/svg%3E')"
             }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-amber-50 bg-opacity-95 rounded-lg shadow-2xl p-8 md:p-12 max-w-3xl mx-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-4">
            Growing Greener Futures
          </h2>
          <p className="text-xl md:text-3xl text-gray-700 mb-8 font-serif">
            One Sapling at a Time
          </p>
          <button className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-56 md:h-64 overflow-hidden bg-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 group-hover:scale-110 transition-transform duration-500" 
             style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%232D5016' width='400' height='300'/%3E%3C/svg%3E",
      title: "Saplings",
      description: "A wide variety of healthy saplings for farms, plantations, and readside greenery"
    },
    {
      image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%234A3728' width='400' height='300'/%3E%3C/svg%3E",
      title: "Vermicompost",
      description: "Organic compost mage from earthworms, ideal for enriching soil naturally"
    },
    {
      image: "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%233E3020' width='400' height='300'/%3E%3C/svg%3E",
      title: "Tools",
      description: "Durable and ergonomic gardening tools for efficient planting and maintenance"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Item Component
const ServiceItem = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="bg-green-700 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    { icon: Sprout, title: "Wholesale & Retail Supply" },
    { icon: FileText, title: "Customized Bulk Orders" },
    { icon: Truck, title: "Doorstep Delivery" },
    { icon: Leaf, title: "Plant Selection Support" }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-8">
              Our Services
            </h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>
          <div className="h-64 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function AgritechVigor() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      <ProductsSection />
      <ServicesSection />
    </div>
  );
}