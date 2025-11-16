import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1C3C] text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr]
 gap-10 border-b border-gray-600 pb-8">
        
       
        <div className="flex mr-4">
          <img src="/assests/logo.png" className="h-[60%] w-[50%] pr-4" alt="" />
          <div>

            <h2  className="text-2xl font-bold text-white mb-4">UVSecure</h2>
            <h2 className="text-xl font-semibold text-slate-300">
              Cyber Security Consulting
            </h2>
            <p className="text-gray-400">
              Safeguarding your digital ecosystem with strategic, end-to-end security solutions.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#7246FD] transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-[#7246FD] transition">About Us</a></li>
            <li><a href="/contact-us" className="hover:text-[#7246FD] transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-[#7246FD] transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400 flex items-center gap-2">
              <Phone size={18} />
            <a href="tel:+918826532520" className="text-gray-400 hover:text-gray-200">
              +91 88265 32520
            </a>
          </p>
          <p className="text-gray-400 flex items-center gap-2">
              <Mail size={18} />
            <a href="mailto:info.uvsecure@gmail.com" className="text-gray-400 hover:text-gray-200">
               info.uvsecure@gmail.com
            </a>
          </p>
          <p className="text-gray-400 mt-2 flex items-center gap-2"> <MapPin size={18} /> Delhi, India</p>
        </div>
      </div>

     
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Cyber Security Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
