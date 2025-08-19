
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <section className="relative mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="relative h-[70vh] lg:min-h-[900px] min-h-[500px] w-full"
        data-aos="fade-in"
      >
        <img 
          className="absolute inset-0 w-full h-full object-cover rounded-2xl  object-center"
          src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg" 
          alt="Premium car customization services"
        />
        <div className="absolute inset-0  bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-2xl text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="text-cyan-400">Transform</span> Your Ride
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg">
              Upgrade your vehicle with cutting-edge technology and premium customization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Book Service Now
              </button>
              <button 
                className="border-2 border-cyan-400 hover:bg-cyan-400 hover:bg-opacity-20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Explore Upgrades
              </button>
            </div>
          </div>
        </div>
        
        {/* Tech Badge */}
        <div 
          className="absolute bottom-8 right-8 bg-gray-900 bg-opacity-80 border border-cyan-300 rounded-full px-4 py-2 flex items-center"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <span className="text-cyan-300 text-sm font-medium">
            <span className="animate-pulse">⚡</span> AI-Powered Diagnostics Available
          </span>
        </div>
      </div>
      
      {/* Floating Features (for larger screens) */}
      <div className="hidden lg:block">
        <div 
          className="absolute top-1/4 left-10 bg-gray-900 bg-opacity-70 border-l-4 border-cyan-400 p-4 rounded-r-lg shadow-lg"
          data-aos="fade-right"
          data-aos-delay="900"
        >
          <h3 className="text-cyan-400 font-semibold">Performance Tuning</h3>
          <p className="text-gray-200 text-sm">+30% HP Guaranteed</p>
        </div>
        <div 
          className="absolute top-1/2 right-10 bg-gray-900 bg-opacity-70 border-r-4 border-cyan-300 p-4 rounded-l-lg shadow-lg"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <h3 className="text-cyan-300 font-semibold">Smart Upgrades</h3>
          <p className="text-gray-200 text-sm">IoT Integration</p>
        </div>
      </div>
    </section>
  );
}