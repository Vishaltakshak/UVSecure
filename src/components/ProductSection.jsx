import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function CyberCategoryGrid() {
  const [active, setActive] = useState(null);

  const categories = [
    {
      id: "phishing",
      title: "Phishing Defense",
      desc: "Protect identities, inboxes, and workflows from targeted phishing attacks.",
      products: [
        { name: "Phishing Protection", link: "/products/phish-e" },
        { name: "Phishing Resilience Platform", link: "/products/phishiq" },
      ],
    },
    {
      id: "grc",
      title: "Governance Risk Compliance",
      desc: "GRC automates compliance, mitigates third-party risks, and delivers real-time organizational risk visibility across your enterprise.",
      products: [
        { name: "Unified Governance, Risk, & Compliance Management", link: "/products/grc-platform" },
        { name: "Unified Control Framework", link: "/products/unified-compliance" },
      ],
    },
    {
      id: "cloud-security",
      title: "Cloud Security",
      desc: "Protect your AWS, Azure, and GCP environments from misconfigurations, compliance gaps, and threats — all within a unified platform.",
      products: [
        { name: "End-to-End Cloud Security", link: "/products/cloud-security" },
      ],
    },
    {
      id: "inventory",
      title: "Inventory Management",
      desc: "Gain complete visibility across AWS, Azure, and GCP with automatic discovery, classification, and monitoring — all from one dashboard.",
      products: [
        { name: "Multi-Cloud Asset Inventory & Visibility", link: "/products/inventory-management" },
      ],
    },
    {
      id: "threat-defense",
      title: "Threat Defense Platform",
      desc: "Next-gen AI/ML-driven threat intelligence, automation, and real-time defense capabilities aligned with MITRE D3FEND framework.",
      products: [
        { name: "Unified Threat Defense Platform (MDR)", link: "/products/unified-threat-defense" },
      ],
    },
  ];


  return (
    <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Products & Solutions</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore our full suite of cybersecurity solutions organized into intelligent categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setActive(active === cat.id ? null : cat.id)}
              className="
                relative p-[2px] rounded-xl cursor-pointer
                 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent
                hover:from-cyan-400/40 hover:via-purple-500/40
                overflow-hidden
                backdrop-blur-[2px]
                shadow-[0_0_20px_rgba(56,189,248,0.15)]
                transition-all
              "
            >
              {/* Card Background */}
              <div className="rounded-xl p-6 bg-[#020617]/80 backdrop-blur-sm border border-white/10 relative overflow-hidden">
                
                {/* Grid Background */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                ></div>

                {/* Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                  <p className="text-gray-400">{cat.desc}</p>
                </div>
                   <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(active === cat.id ? null : cat.id);
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-[#2563eb] transition-all font-semibold text-sm"
                >
                  {active === cat.id ? "Hide Products" : "View Products"}
                </button>

                {/* Expand Section */}
                <AnimatePresence>
                  {active === cat.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 mt-4 border-t border-white/10 pt-4 space-y-2"
                    >
                      {cat.products.map((p, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex justify-between items-center text-gray-300"
                        >
                          <span>{p.name}</span>
                          <Link to={p.link} >
                          <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                            Explore →
                          </button>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
