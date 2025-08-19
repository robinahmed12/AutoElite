"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const services = [
    {
      title: "Performance Tuning",
      description:
        "Unlock your vehicle's full potential with our expert engine optimization and ECU remapping.",
      icon: "⚡",
    },
    {
      title: "AI Diagnostics",
      description:
        "Cutting-edge artificial intelligence to pinpoint issues with 98% accuracy.",
      icon: "🤖",
    },
    {
      title: "Custom Upgrades",
      description:
        "Transform your ride with premium aftermarket parts and bespoke modifications.",
      icon: "🔧",
    },
    {
      title: "Body & Paint",
      description:
        "Showroom-quality finishes using nano-coating technology for lasting protection.",
      icon: "🎨",
    },
    {
      title: "Interior Modernization",
      description:
        "Upgrade your cabin with digital dashboards, ambient lighting, and premium materials.",
      icon: "💺",
    },
    {
      title: "Electrification",
      description:
        "Future-proof your vehicle with hybrid conversions and EV upgrades.",
      icon: "🔋",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mt-20  mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-blue-600">Premium</span> Automotive Services
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Elevate your driving experience with our cutting-edge garage
            solutions, blending technology with craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/70 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-cyan-400 group-hover:text-blue-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 active:bg-red-800">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <button className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 active:bg-red-800">
            Book Your Service Now
          </button>
          <p className="mt-4 text-gray-500">
            Our technicians are certified in the latest automotive technologies
          </p>
        </div>
      </div>
    </section>
  );
}
