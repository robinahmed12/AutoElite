"use client";

import React, { useState, useEffect } from 'react';

const Form = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  if (!mounted) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-pulse bg-gray-300 rounded-lg w-full max-w-md h-96"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-carbon-black opacity-95"></div>
          
          <input 
            type="checkbox" 
            id="chk" 
            aria-hidden="true" 
            className="hidden" 
            checked={!isRegister}
            onChange={toggleForm}
          />
          
          {/* Register Form */}
          <div className={`relative z-10 transition-all duration-700 ease-in-out ${isRegister ? 'opacity-100' : 'opacity-0 -translate-y-10 h-0 overflow-hidden'}`}>
            <div className="px-8 py-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-electric-blue mb-2">Create Account</h2>
                <p className="text-warm-silver">Join our modern car customization platform</p>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input 
                      className="w-full px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                      type="text" 
                      name="username" 
                      placeholder="Username" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <input 
                      className="w-full px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <input 
                      className="w-full px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      required 
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-turbo-red text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transform hover:-translate-y-1 active:translate-y-0"
                >
                  Register
                </button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-warm-silver">
                  Already have an account?{' '}
                  <label 
                    htmlFor="chk" 
                    className="text-neon-cyan cursor-pointer hover:underline font-medium"
                    onClick={toggleForm}
                  >
                    Sign In
                  </label>
                </p>
              </div>
            </div>
          </div>
          
          {/* Login Form */}
          <div className={`relative z-10 transition-all duration-700 ease-in-out ${!isRegister ? 'opacity-100' : 'opacity-0 translate-y-10 h-0 overflow-hidden'}`}>
            <div className="px-8 py-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-electric-blue mb-2">Welcome Back</h2>
                <p className="text-warm-silver">Sign in to access your garage profile</p>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input 
                      className="w-full px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                      type="email" 
                      name="email" 
                      placeholder="Email" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <input 
                      className="w-full px-5 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none"
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-electric-blue focus:ring-electric-blue border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-warm-silver">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-neon-cyan hover:text-cyan-300">
                      Forgot password?
                    </a>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-4 bg-turbo-red text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transform hover:-translate-y-1 active:translate-y-0"
                >
                  Sign In
                </button>
              </form>
              
              <div className="text-center mt-6">
                <p className="text-warm-silver">
                  Don't have an account?{' '}
                  <label 
                    htmlFor="chk" 
                    className="text-neon-cyan cursor-pointer hover:underline font-medium"
                    onClick={toggleForm}
                  >
                    Register
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-carbon-black text-sm">
            By signing up, you agree to our <a href="#" className="text-electric-blue hover:underline">Terms</a> and <a href="#" className="text-electric-blue hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;