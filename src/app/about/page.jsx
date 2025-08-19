"use client"

import React, { useEffect } from "react";
import ResponsiveContainer from "../components/ui/ResponsiveContainer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const features = [
    {
      title: "AI-Powered Diagnostics",
      description: "Our advanced AI system analyzes your vehicle with precision to recommend perfect upgrades.",
      icon: "🔍",
    },
    {
      title: "Custom Builds",
      description: "Tailor your dream car with our extensive catalog of premium parts and accessories.",
      icon: "🛠️",
    },
    {
      title: "Expert Technicians",
      description: "Certified professionals with decades of experience in automotive customization.",
      icon: "👨‍🔧",
    },
    {
      title: "Quality Assurance",
      description: "All upgrades come with warranties and rigorous quality testing.",
      icon: "✅",
    },
  ];

  return (
    <>
      <ResponsiveContainer>
        <div className="min-h-screen mt-20 bg-[#f5f5f5] text-[#333]">
          {/* Hero Section */}
          <section 
            className="relative h-[70vh] overflow-hidden"
            data-aos="fade-in"
          >
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 
                  className="text-5xl md:text-6xl font-bold text-white mb-4"
                  data-aos="fade-up"
                >
                  Revolutionizing Car Customization
                </h1>
                <p 
                  className="text-xl text-white max-w-2xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Where cutting-edge technology meets automotive passion
                </p>
              </div>
            </div>
            <img
              className="w-full h-full object-cover absolute"
              src="https://images.pexels.com/photos/3807811/pexels-photo-3807811.jpeg"
              alt="High-performance car in garage"
            />
          </section>

          {/* About Section */}
          <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]">
                  Our <span className="text-[#00C2FF]">Story</span>
                </h2>
                <p className="text-lg mb-6">
                  Founded in 2015, our garage began as a small workshop with a big vision - to transform how car enthusiasts upgrade their vehicles. 
                  What started as a passion project has grown into a technology-driven platform serving thousands of customers nationwide.
                </p>
                <p className="text-lg mb-8">
                  We combine traditional craftsmanship with modern innovation to deliver unparalleled customization experiences. Our team of engineers, 
                  designers, and automotive experts work together to push the boundaries of what's possible in car personalization.
                </p>
                <button className="bg-[#FF2E00] hover:bg-[#E02900] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Meet Our Team
                </button>
              </div>
              <div 
                className="relative h-96"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  className="w-full h-full object-cover  shadow-xl absolute"
                  src="https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg"
                  alt="Garage workspace"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#00C2FF] p-6 rounded-xl shadow-xl w-1/2">
                  <h3 className="text-2xl font-bold text-white">10,000+</h3>
                  <p className="text-white">Successful Upgrades</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-[#1a1a1a] text-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl font-bold mb-4">
                  Why Choose <span className="text-[#00C2FF]">Our Platform</span>
                </h2>
                <p className="text-xl max-w-2xl mx-auto">
                  We're redefining car customization with innovative technology and exceptional service
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#2a2a2a] p-8 rounded-xl hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] border border-transparent transition-all duration-300 transform hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up">
              What Our <span className="text-[#FF2E00]">Customers</span> Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "The AI recommendations helped me discover upgrades I didn't even know were possible for my car. The whole process was seamless!"
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 20}.jpg`}
                      alt="Customer"
                    />
                    <div>
                      <h4 className="font-bold">Alex Johnson</h4>
                      <p className="text-gray-500 text-sm">Porsche 911 Owner</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#00C2FF]/10">
            <div className="max-w-4xl mx-auto text-center px-4" data-aos="zoom-in">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Ride?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Experience the future of car customization with our platform
              </p>
              <button className="bg-[#FF2E00] hover:bg-[#E02900] text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
            </div>
          </section>
        </div>
      </ResponsiveContainer>
    </>
  );
}