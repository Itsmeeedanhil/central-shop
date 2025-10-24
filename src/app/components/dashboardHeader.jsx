"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bell, Settings } from "./icons";

export default function DashboardHeader({ user, notifications }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing cookies, localStorage, or session)
    console.log("Logging out...");
    router.push("/"); // Redirect to homepage
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex items-center justify-between">

      {/* Left Side - User Info */}
      <div className="flex items-center gap-4">
        <Image
          src={user.avatar}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
          unoptimized={true}
        />
        <div>
          <p className="text-sm text-gray-500">Welcome back,</p>
          <h1 className="font-bold text-gray-900">{user.name.split(" ")[0]}</h1>
        </div>
      </div>

      {/* Right Side - Notifications & Settings */}
      <div className="flex items-center gap-4 relative">
        <button className="relative p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
          <Bell className="w-6 h-6 text-gray-700" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>

        {/* Settings Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
