"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/header";
import ProductCard from "./components/productCards";

import {
  Zap,
  Tablet,
  Home,
  Headphones,
  Gem,
  Truck,
  ShieldCheck,
  Tag,
  Mail,
  Star,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Sparkles,
  Gift,
  Clock,
  Heart,
} from "./components/icons";

// --- Expanded Featured Products ---
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Mechanical Keyboard",
    category: "Electronics",
    price: "$129.99",
    imageUrl: "https://placehold.co/400x300/f5f5f5/1a1a1a?text=Keyboard",
    description: "Ultra-responsive typing.",
    icon: Tablet,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Eco-friendly Coffee Mugs (Set of 4)",
    category: "Home Goods",
    price: "$35.50",
    imageUrl: "https://placehold.co/400x300/e5e5e5/1a1a1a?text=Mugs",
    description: "Sustainable bamboo fiber mugs.",
    icon: Home,
    badge: "Eco-Friendly",
  },
  {
    id: 3,
    name: "Noise Cancelling Headphones Pro",
    category: "Electronics",
    price: "$249.00",
    imageUrl: "https://placehold.co/400x300/d4d4d4/1a1a1a?text=Headphones",
    description: "Immersive sound.",
    icon: Headphones,
    badge: "Premium",
  },
  {
    id: 4,
    name: "Minimalist Leather Wallet",
    category: "Accessories",
    price: "$45.00",
    imageUrl: "https://placehold.co/400x300/c4c4c4/1a1a1a?text=Wallet",
    description: "Slim profile, genuine leather.",
    icon: Gem,
    badge: "New",
  },
];

// --- New Arrivals ---
const newArrivals = [
  {
    id: 5,
    name: "Smart Home Hub",
    category: "Electronics",
    price: "$189.99",
    imageUrl: "https://placehold.co/400x300/f5f5f5/1a1a1a?text=Smart+Hub",
    description: "Control everything.",
  },
  {
    id: 6,
    name: "Artisan Ceramic Bowl Set",
    category: "Home Goods",
    price: "$67.00",
    imageUrl: "https://placehold.co/400x300/e5e5e5/1a1a1a?text=Bowls",
    description: "Handcrafted elegance.",
  },
  {
    id: 7,
    name: "Premium Yoga Mat",
    category: "Fitness",
    price: "$79.99",
    imageUrl: "https://placehold.co/400x300/d4d4d4/1a1a1a?text=Yoga+Mat",
    description: "Non-slip perfection.",
  },
  {
    id: 8,
    name: "Titanium Water Bottle",
    category: "Accessories",
    price: "$54.99",
    imageUrl: "https://placehold.co/400x300/c4c4c4/1a1a1a?text=Bottle",
    description: "Keeps cold for 48hrs.",
  },
];

// --- Customer Reviews ---
const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    text: "The quality exceeded my expectations. Fast shipping and the packaging was beautiful!",
    product: "Wireless Keyboard",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    rating: 5,
    text: "Best headphones I've ever owned. The noise cancellation is incredible.",
    product: "Headphones Pro",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    rating: 5,
    text: "Love the eco-friendly mugs! Perfect size and they look great in my kitchen.",
    product: "Coffee Mugs",
  },
];

// --- Categories ---
const categories = [
  { name: "Electronics", icon: Tablet, count: "150+" },
  { name: "Home & Living", icon: Home, count: "200+" },
  { name: "Accessories", icon: Gem, count: "100+" },
  { name: "Audio", icon: Headphones, count: "50+" },
];

// --- Value Props Component ---
const ValueProps = ({ icon: Icon, title, description }) => (
  <div className="group text-center p-8 border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white hover:border-black transform hover:-translate-y-2">
    <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300">
      <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

// --- Animated Counter Component ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// --- Stats Component ---
const StatCard = ({ icon: Icon, value, label, suffix = "" }) => (
  <div className="text-center">
    <Icon className="w-10 h-10 mx-auto mb-3 text-gray-700" />
    <div className="text-4xl font-bold text-gray-900 mb-2">
      <AnimatedCounter end={value} suffix={suffix} />
    </div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);


export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Thank you for subscribing! 🎉");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Header />

      {/* 1. Hero Section - Light Theme */}
      <section className="relative min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 text-center flex items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white font-semibold mb-8 animate-bounce">
            <Sparkles className="w-4 h-4" />
            <span>New Collection Just Dropped</span>
          </div>
          
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-gray-900 mb-8 leading-none">
            Curated <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-700 to-gray-500">Innovation</span><br />for Your Daily Life
          </h1>
          
          <p className="text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            <strong className="text-gray-900">Stop scrolling, start discovering.</strong> Find the exceptional tech, timeless home goods, and unique accessories you didn&apos;t know you needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#spotlight"
              className="group inline-flex items-center justify-center px-12 py-5 border-2 border-black text-lg font-bold rounded-full shadow-2xl text-white bg-black hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Explore Featured Products
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-12 py-5 border-2 border-black text-lg font-bold rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Browse Categories
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-black fill-current" />
              <span><strong className="text-black">4.9/5</strong> from 10K+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-black" />
              <span><strong className="text-black">50K+</strong> happy customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-black" />
              <span><strong className="text-black">Award-winning</strong> curation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={Users} value={50000} label="Happy Customers" suffix="+" />
            <StatCard icon={Star} value={10000} label="5-Star Reviews" suffix="+" />
            <StatCard icon={Truck} value={99} label="On-Time Delivery" suffix="%" />
            <StatCard icon={Gift} value={500} label="Unique Products" suffix="+" />
          </div>
        </div>
      </section>

      {/* 3. Categories Section */}
      <section id="categories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover curated collections for every aspect of your lifestyle
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="group p-8 bg-gray-50 border-2 border-gray-300 rounded-2xl hover:border-black hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <category.icon className="w-12 h-12 mx-auto mb-4 text-black group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 font-semibold">{category.count} items</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Value Proposition Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Our Collection?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just another online store. Here&apos;s what makes us different.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ValueProps
              icon={Truck}
              title="Fast & Free Shipping"
              description="Enjoy complimentary shipping on all orders over $50, delivered right to your door within 2-3 business days."
            />
            <ValueProps
              icon={ShieldCheck}
              title="Guaranteed Quality"
              description="Every item is rigorously tested and hand-picked for durability and excellence. 30-day money-back guarantee."
            />
            <ValueProps
              icon={Tag}
              title="Exclusive Pricing"
              description="Access to unique products and members-only deals you won't find anywhere else. Up to 40% off retail."
            />
            <ValueProps
              icon={Clock}
              title="24/7 Support"
              description="Our dedicated team is always here to help. Get instant answers to your questions anytime, anywhere."
            />
            <ValueProps
              icon={Heart}
              title="Sustainability First"
              description="We partner with eco-conscious brands and use minimal, recyclable packaging for every shipment."
            />
            <ValueProps
              icon={Award}
              title="Expertly Curated"
              description="Our team of product experts tests hundreds of items to bring you only the best of the best."
            />
          </div>
        </div>
      </section>

      {/* 5. Spotlight Products Section */}
      <section id="spotlight" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-black mb-4">
              <Zap className="w-8 h-8 fill-current" />
              <span className="text-lg font-bold uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Spotlight Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites that our customers can&apos;t get enough of
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <button
              className="group inline-flex items-center px-12 py-4 border-2 border-black text-black text-lg font-bold rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105"
              onClick={() => console.log("Navigating to all products...")}
            >
              View All 500+ Items
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. New Arrivals Section */}
      <section className="py-24 bg-linear-to-br from-gray-100 via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-black mb-4">
              <TrendingUp className="w-8 h-8" />
              <span className="text-lg font-bold uppercase tracking-wider">Just In</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fresh finds added weekly. Be the first to discover what&apos;s new.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our customers say.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-8 bg-gray-50 border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl hover:border-black transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-black fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{review.text}&quot;</p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">Verified Purchase: {review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="relative py-24 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full opacity-10"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Don&apos;t Miss Out on the Next Big Thing
          </h2>
          
          <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
            Join <strong className="text-white">50,000+ subscribers</strong> getting weekly drops, exclusive discounts up to <strong className="text-white">40% off</strong>, and early access to new arrivals.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="grow p-5 rounded-xl border-2 border-gray-700 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/30 focus:border-white text-lg transition-all duration-150 shadow-2xl"
              />
              <button
                onClick={handleSubmit}
                className="px-10 py-5 bg-white text-black text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto"
              >
                Sign Up Free
              </button>
            </div>
            <p className="text-sm text-gray-400">
              ✨ Get a <strong className="text-white">15% welcome discount</strong> on your first order. No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>50K+ subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>4.9/5 satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>100% secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 text-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg mb-4 text-gray-900 font-semibold">© 2025 Your Store. All rights reserved.</p>
          <p className="text-sm text-gray-600">
            Curating exceptional products for exceptional people.
          </p>
        </div>
      </footer>
    </div>
  );
}