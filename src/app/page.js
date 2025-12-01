'use client';
import React from 'react';
import { Sprout, FileText, Truck, Leaf, Menu, X } from 'lucide-react';

import Navbar from '@/Components/Navbar';
import Cards from '@/Components/Cards';
import Image from 'next/image';
import AboutUs from '@/Components/About';
import ContactUs from '@/Components/ContactUs';
import Link from 'next/link';

// Logo Component

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] bg-cover bg-center" 
             style={{
               backgroundImage: "url(./images/hero.jpg)"
             }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-amber-50 bg-opacity-95 rounded-lg shadow-2xl p-8 md:p-12 max-w-3xl mx-4 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-4">
            Growing Greener Futures
          </h2>
          <p className="text-xl md:text-3xl text-gray-700 mb-8 font-serif">
            One Sapling at a Time
          </p>
          <Link href={'#products'}>
            <button className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg">
              Explore Products
            </button>
          </Link>
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
            <img src={'./images/services.jpg'} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function AgritechVigor() {
  const products = [
    {
      image: "./images/saplings.jpg",
      title: "Saplings",
      href:'saplings',
      description: "A wide variety of healthy saplings for farms, plantations, and readside greenery"
    },
    {
      image: "./images/Vermicompost.jpg",
      title: "Vermicompost",
      href:'vermicompost',
      description: "Organic compost mage from earthworms, ideal for enriching soil naturally"
    },
    {
      image: "./images/tools.jpg",
      title: "Tools",
      href:'tools',
      description: "Durable and ergonomic gardening tools for efficient planting and maintenance"
    }
  ];
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <Hero />
      <section id='products'>
        <Cards heading={'Our Products'} list={products} />
      </section>
      <ServicesSection />
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}