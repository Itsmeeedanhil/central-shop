"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
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

  if (!email || !password) {
    setError("Please fill in both fields.");
    setIsLoading(false);
    return;
  }

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    setSuccessMessage("Login successful! Redirecting to dashboard...");
    setTimeout(() => router.push("/dashboard"), 1000);

  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="flex min-h-screen">
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
              Central Shop
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Your comprehensive dashboard for managing inventory, sales, and operations all in one place.
            </p>
          </div>
          
          <div className="space-y-6 mt-12">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Real-time Analytics</h3>
                <p className="text-gray-400 text-sm">Monitor your business performance with live data and insights</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade security to protect your sensitive data</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center border border-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Optimized for speed and efficiency in every operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-100">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight text-center">
              Welcome Back 👋
            </h2>
            <p className="mt-3 text-gray-600 text-center">
              Sign in to access your Central Shop dashboard.
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
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                placeholder="Admin@gmail.com"
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                placeholder="Admin123"
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
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => router.push("/register")}
                className="font-bold text-black hover:text-gray-700 transition duration-150 ease-in-out"
                disabled={isLoading}
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}