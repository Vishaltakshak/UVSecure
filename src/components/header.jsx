import React, { useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSheetDropdown, setOpenSheetDropdown] = useState(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (link) => {
  clearTimeout(hoverTimeout.current);
  hoverTimeout.current = setTimeout(() => {
    setOpenDropdown(link); // OPEN only
  }, 200);
};

const handleMouseLeave = () => {
  clearTimeout(hoverTimeout.current);
  hoverTimeout.current = setTimeout(() => {
    setOpenDropdown(null); // OPEN only
  }, 200); // CLOSE immediately
};




  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSheetDropdown = (menu) => {
    setOpenSheetDropdown(openSheetDropdown === menu ? null : menu);
  };

  const products = [
    { name: "Phish-E", id: "phish-e" },
    { name: "Phishiq", id: "phishiq" },
    { name: "Cloud Security", id: "cloud-security" },
    { name: "GRC", id: "grc-platform" },
    { name: "Inventory Management", id: "inventory-management" },

    { name: "UFC", id: "unified-compliance" },
    { name: "UTD", id: "unified-threat-defense" },
  ];

  const services = [
    { name: "Cyber Defence Training", id: "cyber-defense-training-factory" },
    { name: "Indigenous Cybersecurity Excellence", id: "indigenous-cybersecurity-excellence" },
    { name: "Red Team & Adversary Simulation", id: "red-team-adversary-simulation" },
    { name: "Web Application & Security Testing", id: "web-application-security-testing" },
    { name: "Penetration Testing", id: "penetration-testing-vapt" },
    { name: "Compliance & Auditing", id: "compliance-auditing" },
    { name: "Social Engineering", id: "social-engineering" },
    { name: "Infrastructure Monitoring Services", id: "infrastructure-monitoring" },
    { name: "Incident Response Service", id: "incident-response" },
    { name: "Sensitive Data Leakage Monitoring", id: "sensitive-data-leakage" },
    { name: "AI & LLM Security Testing", id: "ai-llm-security-testing" },
  ];

  const links = ["Products", "Services",  "About Us"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#081B34]/90 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
       <div className="flex items-center  w-[15%]">
          <img className="h-12 pr-2" src="/assests/logo.jpg" alt="" />

          <Link to="/" className="flex flex-col font-semibold text-xl leading-tight">
            <span>UVSecure</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-[17px] font-medium">
          {links.map((link) =>
            link === "Products" || link === "Services" ? (
              <div key={link} className="relative" onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={handleMouseLeave}>
                <button
                  className="flex items-center gap-1 hover:text-[#AAB8FF] transition-all"
                  onClick={() => toggleDropdown(link)}
                
                >
                  {link}
                  <motion.span
                    animate={{ rotate: openDropdown === link ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openDropdown === link && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute mt-3 w-72 rounded-t-2xl rounded-b-3xl p-2 
                      bg-gradient-to-br from-[#111933]/98 to-[#1B2456]/98 
                      backdrop-blur-md border border-white/10 
                      shadow-[0_0_25px_rgba(114,70,253,0.35)] overflow-y-auto
                      max-h-[85vh] custom-scrollbar overscroll-contain [mask-image:radial-gradient(circle,white_98%,transparent_100%)]"
                    >
                      {(link === "Products" ? products : services).map((item) => (
                        <li key={item.id} className="list-none">
                          <Link
                            to={`/${link.toLowerCase()}/${item.id}`}
                            className="block px-4 py-2 text-[#E8EAF6] hover:text-white 
                            hover:bg-white/10 rounded-lg cursor-pointer 
                            transition-all text-[15px]"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#AAB8FF] transition-all"
              >
                {link}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link to="/contact-us" >
          <button className="hidden md:block bg-[#2563eb] hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] transition-all text-white font-semibold px-5 py-2 rounded-xl">
            Get in Touch →
          </button>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sheet Navigation */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-4/5 h-screen p-6 
            bg-gradient-to-br from-[#0A1128]/98 to-[#1A2456]/98
            backdrop-blur-xl border-r border-white/10 
            shadow-[0_0_40px_rgba(114,70,253,0.4)] overflow-scroll"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-semibold">Menu</span>
              <X
                size={24}
                className="cursor-pointer hover:text-[#AAB8FF]"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            <ul className="flex flex-col space-y-4">
              {links.map((link) =>
                link === "Products" || link === "Services" ? (
                  <li key={link} className="list-none">
                    <div
                      onClick={() => toggleSheetDropdown(link)}
                      className="flex justify-between items-center cursor-pointer text-lg hover:text-[#AAB8FF] transition-all"
                    >
                      {link}
                      <motion.span
                        animate={{ rotate: openSheetDropdown === link ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </div>

                    <AnimatePresence>
                      {openSheetDropdown === link && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-2 ml-3 border-l border-white/10 pl-4 space-y-2"
                        >
                          {(link === "Products" ? products : services).map((item) => (
                            <li key={item.id}>
                              <Link
                                to={`/${link.toLowerCase()}/${item.id}`}
                                className="block text-[#E8EAF6] hover:text-white text-[15px] cursor-pointer pl-3 transition-all"
                                onClick={() => setMobileMenu(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link} className="list-none">
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-lg hover:text-[#AAB8FF]"
                      onClick={() => setMobileMenu(false)}
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link to='/contact-us'>
              <button className="mt-10 w-full bg-[#2563eb] text-white font-semibold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all">
                Get in Touch →
              </button>
           </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
