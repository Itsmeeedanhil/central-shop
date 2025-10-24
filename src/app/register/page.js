"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1500)); 

    try {
        setSuccessMessage("Registration successful! Redirecting to login...");
        
        setName("");
        setEmail("");
        setPassword("");
        
        setTimeout(() => {
            alert("Login page redirect would happen here");
        }, 2000);

    } catch (apiError) {
        setError("Registration failed. Please try again.");
        setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Dark Design */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Join Central Shop
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Create your account and start managing your business operations with powerful tools and insights.
            </p>
          </div>
          
          <div className="space-y-6 mt-12">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Easy Setup</h3>
                <p className="text-gray-400 text-sm">Get started in minutes with our simple onboarding process</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Secure & Private</h3>
                <p className="text-gray-400 text-sm">Your data is encrypted and protected with industry standards</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Full Access</h3>
                <p className="text-gray-400 text-sm">Unlock all features and capabilities from day one</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-100">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Create Account
            </h2>
            <p className="mt-3 text-gray-600">
              Join Central Shop to get started.
            </p>
          </div>

          {successMessage && (
            <div className="p-4 text-base text-green-800 bg-green-100 border border-green-300 rounded-lg shadow-sm font-medium animate-pulse">
              {successMessage}
            </div>
          )}

          {error && (
            <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-300 rounded-lg shadow-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                placeholder="John Doe"
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                placeholder="you@example.com"
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password (min. 6 characters)
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                placeholder="••••••••"
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition duration-150 ease-in-out"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 rounded-xl text-lg font-bold shadow-lg transition duration-300 ease-in-out transform hover:scale-105
                ${
                  isLoading
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                }`}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/login")}
                className="font-bold text-black hover:text-gray-700 transition duration-150 ease-in-out"
                disabled={isLoading}
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}