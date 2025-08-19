"use client"

import React, { useEffect } from 'react';
import ResponsiveContainer from '../ui/ResponsiveContainer';
import { useState } from 'react';

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatWeDO() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Performance Upgrades",
      description: "Enhance your car's power and efficiency with our cutting-edge performance solutions.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Modern Tech Installation",
      description: "From advanced infotainment systems to driver assistance tech, we've got you covered.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Custom Modifications",
      description: "Personalize your vehicle with our bespoke customization options and styling packages.",
      image: "https://quanticalabs.com/wp_themes/carservice/files/2015/05/image_03-390x260.jpg"
    },
    {
      id: 4,
      title: "AI Diagnostics",
      description: "Our state-of-the-art AI diagnostic tools identify issues before they become problems.",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <>
      <section className="py-16 ">
        <ResponsiveContainer>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-blue-300 max-w-3xl mx-auto">
              Transforming your vehicle with cutting-edge technology and premium upgrades for the modern driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setActiveImage(service.id)}
                onMouseLeave={() => setActiveImage(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-56 object-cover transition-transform duration-700 ${activeImage === service.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-cyan-400 font-semibold">Learn more →</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    Explore Service
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-900 rounded-2xl overflow-hidden" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Premium Automotive Enhancements</h2>
                <p className="text-gray-300 mb-6">
                  We specialize in transforming ordinary vehicles into extraordinary driving machines. Our team of certified technicians uses only the latest tools and highest quality parts to ensure your complete satisfaction.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    State-of-the-art diagnostic equipment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    OEM and performance parts availability
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Custom fabrication and installation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    Lifetime warranty on all installations
                  </li>
                </ul>
                <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-fit">
                  Book Your Consultation
                </button>
              </div>
              <div className="relative min-h-96 lg:min-h-0">
                <img 
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Car service" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </>
  );
}