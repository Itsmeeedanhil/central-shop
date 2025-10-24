"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/dashboardHeader";
import Image from "next/image";

import {
  ShoppingBag,
  Package,
  Heart,
  Settings,
  CreditCard,
  MapPin,
  Bell,
  TrendingUp,
  Clock,
  CheckCircle,
  ChevronRight,
  Star,
  Eye,
} from "../components/icons";


// Mock user data
const userData = {
  name: "Alex Morrison",
  email: "alex.morrison@email.com",
  memberSince: "January 2024",
  avatar: "https://placehold.co/100x100/1a1a1a/ffffff?text=AM",
};

// Mock orders data
const recentOrders = [
  {
    id: "#ORD-2847",
    date: "Oct 20, 2025",
    items: 3,
    total: "$324.99",
    status: "Delivered",
    statusType: "success",
  },
  {
    id: "#ORD-2846",
    date: "Oct 15, 2025",
    items: 1,
    total: "$129.99",
    status: "In Transit",
    statusType: "progress",
  },
  {
    id: "#ORD-2845",
    date: "Oct 10, 2025",
    items: 2,
    total: "$89.50",
    status: "Processing",
    statusType: "pending",
  },
];

// Mock saved items (wishlist)
const savedItems = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    price: "$79.99",
    imageUrl: "https://placehold.co/200x200/f5f5f5/1a1a1a?text=Yoga+Mat",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: "$399.99",
    imageUrl: "https://placehold.co/200x200/e5e5e5/1a1a1a?text=Watch",
    inStock: true,
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: "$159.00",
    imageUrl: "https://placehold.co/200x200/d4d4d4/1a1a1a?text=Backpack",
    inStock: false,
  },
];

// Stats cards data
const stats = [
  {
    icon: ShoppingBag,
    label: "Total Orders",
    value: "24",
    trend: "+3 this month",
    trendUp: true,
  },
  {
    icon: Package,
    label: "Active Orders",
    value: "2",
    trend: "In progress",
    trendUp: true,
  },
  {
    icon: Heart,
    label: "Saved Items",
    value: "12",
    trend: "Wishlist",
    trendUp: false,
  },
  {
    icon: Star,
    label: "Reward Points",
    value: "1,240",
    trend: "$12.40 value",
    trendUp: true,
  },
];

// Quick actions
const quickActions = [
  { icon: ShoppingBag, label: "Browse Products", action: "browse" },
  { icon: Package, label: "Track Order", action: "track" },
  { icon: Heart, label: "View Wishlist", action: "wishlist" },
  { icon: Settings, label: "Account Settings", action: "settings" },
];

// Dashboard component
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState(3);

  const StatCard = ({ icon: Icon, label, value, trend, trendUp }) => (
    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-black transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-black" />
        </div>
        {trendUp ? (
          <TrendingUp className="w-5 h-5 text-green-600" />
        ) : (
          <Clock className="w-5 h-5 text-gray-400" />
        )}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`text-xs ${trendUp ? 'text-green-600' : 'text-gray-500'} font-medium`}>
        {trend}
      </p>
    </div>
  );

  function OrderCard({ order }) {
  // define the badge color classes for each statusType
        const statusColors = {
            success: "text-green-600 bg-green-50 border-green-200",
            progress: "text-blue-600 bg-blue-50 border-blue-200",
            pending: "text-yellow-600 bg-yellow-50 border-yellow-200",
        };

        // map statusType -> icon component (these must be exported from your icons file)
        const statusIcons = {
            success: CheckCircle,
            progress: Package,
            pending: Clock,
        };

        // safe fallback to avoid "undefined" crashes
        const StatusIcon = statusIcons[order.statusType] || Clock;

        return (
            <div className="flex items-center justify-between p-6 bg-gray-50 border-2 border-gray-300 rounded-xl hover:border-black transition-all duration-300">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-bold text-gray-900">{order.id}</h4>

                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    statusColors[order.statusType] || "text-gray-600 bg-gray-50 border-gray-200"
                    }`}
                >
                    {StatusIcon && <StatusIcon className="w-3 h-3 inline mr-1" />}
                    {order.status}
                </span>
                </div>

                <p className="text-sm text-gray-600 mb-1">{order.date} • {order.items} items</p>
                <p className="text-lg font-bold text-gray-900">{order.total}</p>
            </div>

            <button className="group p-3 hover:bg-black rounded-xl transition-colors duration-300">
                <Eye className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </button>
            </div>
        );
        }

  const SavedItemCard = ({ item }) => (
    <div className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden hover:border-black transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square bg-gray-100">
        <div className="relative w-full h-full">
            <Image
            src="https://placehold.co/200x200/f5f5f5/1a1a1a?text=Yoga+Mat"
            alt="Yoga Mat"
            width={200}
            height={200}
            className="object-cover"
            unoptimized={true}
            />
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
        <p className="text-lg font-bold text-gray-900 mb-3">{item.price}</p>
        {item.inStock ? (
          <button className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Add to Cart
          </button>
        ) : (
          <button className="w-full px-4 py-2 bg-gray-200 text-gray-500 font-semibold rounded-lg cursor-not-allowed">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Header user={userData} notifications={notifications} />


      {/* Quick Actions */}
      <section className="py-8 mt-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => console.log(`Action: ${action.action}`)}
                className="group flex items-center gap-3 p-4 bg-gray-50 border-2 border-gray-300 rounded-xl hover:border-black hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <action.icon className="w-5 h-5 text-black group-hover:text-white" />
                </div>
                <span className="font-semibold text-gray-900 text-sm lg:text-base">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Your Statistics</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900">Recent Orders</h2>
                <button className="text-black font-semibold hover:underline flex items-center gap-1">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
              
              <button className="mt-6 w-full py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-xl hover:border-black hover:bg-gray-50 transition-all duration-300">
                View Order History
              </button>
            </div>

            {/* Sidebar - Account Info & Quick Links */}
            <div className="space-y-6">
              {/* Account Summary */}
              <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6">Account Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <CreditCard className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-300">Saved Cards</p>
                      <p className="font-bold">2 Cards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-300">Addresses</p>
                      <p className="font-bold">3 Locations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                    <Star className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-300">Loyalty Status</p>
                      <p className="font-bold">Gold Member</p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  Manage Account
                </button>
              </div>

              {/* Recent Activity */}
              <div className="bg-white border-2 border-gray-300 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Order Delivered</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Review Posted</p>
                      <p className="text-xs text-gray-600">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Wishlist Updated</p>
                      <p className="text-xs text-gray-600">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saved Items / Wishlist */}
      <section className="py-12 bg-linear-to-br from-gray-100 via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
              <Heart className="w-8 h-8" />
              Your Wishlist
            </h2>
            <button className="text-black font-semibold hover:underline flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedItems.map((item) => (
              <SavedItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? <button className="text-black font-semibold hover:underline">Contact Support</button>
          </p>
        </div>
      </footer>
    </div>
  );
}