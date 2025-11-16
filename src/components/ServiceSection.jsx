import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

export default function ServiceSection() {
  const [active, setActive] = useState(null);

  const categories = [
  {
    id: "cyber-defense-training",
    title: "Cyber Defence & Workforce Readiness",
    desc: "Strengthen your organization’s human firewall with hands-on training, simulation environments, and continuous cyber readiness programs.",
    products: [
      { name: "Cyber Defence Training", link: "/services/cyber-defense-training-factory" },
      { name: "Indigenous Cybersecurity Excellence", link: "/services/indigenous-cybersecurity-excellence" },
    ],
  },
  {
    id: "offensive-security",
    title: "Offensive Security & Adversary Operations",
    desc: "Leverage advanced adversary simulation, red teaming, and exploit-driven assessments to proactively identify and eliminate vulnerabilities.",
    products: [
      { name: "Red Team & Adversary Simulation", link: "/services/red-team-adversary-simulation" },
      { name: "Penetration Testing", link: "/services/penetration-testing-vapt" },
      { name: "Social Engineering", link: "/services/social-engineering" },
    ],
  },
  {
    id: "application-security",
    title: "Application & Web Security",
    desc: "Ensure your applications are hardened against modern attack vectors with deep-dive code assessments, security testing, and continuous validation.",
    products: [
      { name: "Web Application & Security Testing", link: "/services/web-application-security-testing" },
    ],
  },
  {
    id: "compliance-auditing",
    title: "Compliance, Assurance & Governance",
    desc: "Achieve audit readiness, streamline governance processes, and maintain continuous compliance across industry frameworks.",
    products: [
      { name: "Compliance & Auditing", link: "/services/compliance-auditing" },
    ],
  },
  {
    id: "monitoring-infra",
    title: "Infrastructure Monitoring & Operations",
    desc: "Maintain complete visibility and operational control of your infrastructure with real-time monitoring and risk intelligence.",
    products: [
      { name: "Infrastructure Monitoring Services", link: "/services/infrastructure-monitoring" },
      { name: "Sensitive Data Leakage Monitoring", link: "/services/sensitive-data-leakage" },
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response & Crisis Management",
    desc: "Respond rapidly to critical threats with expert-driven investigation, containment, and recovery processes.",
    products: [
      { name: "Incident Response Service", link: "/services/incident-response" },
    ],
  },
  {
    id: "ai-security",
    title: "AI & Advanced Security Testing",
    desc: "Safeguard AI-driven systems with specialized LLM security testing, bias detection, and advanced threat modeling for next-gen infrastructure.",
    products: [
      { name: "AI & LLM Security Testing", link: "/services/ai-llm-security-testing" },
    ],
  },
];


  return (
    <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Security Services Portfolio</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Unlock strategic cybersecurity services engineered to fortify your digital ecosystem end-to-end.
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
                  {active === cat.id ? "Hide Services" : "View Services"}
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
