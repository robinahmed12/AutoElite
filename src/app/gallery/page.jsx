"use client"

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Turbo Performance",
      description: "High-performance turbocharger installations with dyno tuning",
      image: "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg",
      category: "performance",
      price: "From $2,499"
    },
    {
      id: 2,
      title: "Custom Paint",
      description: "Show-quality paint with ceramic coating protection",
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
      category: "cosmetic",
      price: "From $3,999"
    },
    {
      id: 3,
      title: "Luxury Interiors",
      description: "Hand-stitched leather and premium materials",
      image: "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg",
      category: "interior",
      price: "From $4,500"
    },
    {
      id: 4,
      title: "Forged Wheels",
      description: "Lightweight forged alloy wheels with performance tires",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      category: "wheels",
      price: "From $1,999"
    },
    {
      id: 5,
      title: "LED Conversion",
      description: "OEM+ lighting upgrades with dynamic features",
      image: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg",
      category: "lighting",
      price: "From $899"
    },
    {
      id: 6,
      title: "Premium Audio",
      description: "Competition-grade sound systems with noise cancellation",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      category: "audio",
      price: "From $1,799"
    },
    {
      id: 7,
      title: "Suspension Tuning",
      description: "Track-ready suspension with adjustable damping",
      image: "https://images.pexels.com/photos/1082655/pexels-photo-1082655.jpeg",
      category: "performance",
      price: "From $2,199"
    },
    {
      id: 8,
      title: "Carbon Fiber",
      description: "Weight reduction with premium carbon components",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg",
      category: "cosmetic",
      price: "From $1,299"
    },
    {
      id: 9,
      title: "Digital Dash",
      description: "Fully customizable digital instrument clusters",
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      category: "interior",
      price: "From $2,899"
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Upgrades' },
    { id: 'performance', name: 'Performance' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'interior', name: 'Interior' },
    { id: 'wheels', name: 'Wheels' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'audio', name: 'Audio' }
  ];

  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Premium Auto Upgrades | Elite Garage</title>
        <meta name="description" content="Explore our premium car upgrades and modifications" />
      </Head>
    
      <div className="max-w-7xl mx-auto mt-20">
        {/* Hero Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-extrabold text-carbon-black sm:text-5xl md:text-6xl">
            Transform Your <span className="text-electric-blue">Vehicle</span>
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-600 mx-auto">
            Discover our premium upgrades gallery featuring the finest modifications for your car
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-electric-blue text-black shadow-lg'
                    : 'bg-warm-silver text-carbon-black hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-red-400/20"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/70 via-carbon-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 right-4 bg-turbo-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-carbon-black group-hover:text-electric-blue transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-electric-blue/10 text-electric-blue">
                    {item.category}
                  </span>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <button className="text-sm font-medium text-turbo-red hover:text-red-700 flex items-center group">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 bg-carbon-black text-white text-sm font-medium rounded-md hover:bg-electric-blue transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className="mt-24 bg-carbon-black rounded-2xl overflow-hidden relative"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg')] bg-cover bg-center opacity-20" />
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold text-black">
              Ready to Transform Your Ride?
            </h3>
            <p className="mt-4 text-warm-silver max-w-2xl mx-auto">
              Our master technicians will guide you through the perfect upgrades for your vehicle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-turbo-red text-white bg-blue-500 font-medium rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-electric-blue text-electric-blue font-medium rounded-lg hover:bg-electric-blue/10 transition-all duration-300">
                Call Now: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;