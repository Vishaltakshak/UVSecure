import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, MessageSquare } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
const faqData = {
  "General Questions": [
    {
      q: "What is UVSecure?",
      a: "UVSecure is an indigenous cybersecurity consulting and implementation powerhouse dedicated to strengthening India's digital ecosystem. We help organizations enhance their defense posture through Indian-built security technologies, advanced assessments, long-term threat mitigation, and strategic advisory services. Our mission is to ensure that Indian enterprises—across sectors—depend on secure, sovereign, and future-proof cybersecurity solutions rather than foreign-controlled infrastructures.",
    },
    {
      q: "What does 'indigenous cybersecurity' mean?",
      a: "Indigenous cybersecurity refers to security tools, platforms, and technologies that are conceptualized, developed, and maintained entirely within India. This strengthens digital sovereignty, reduces foreign dependence, protects intellectual property, and aligns with national security priorities. Indigenous solutions allow Indian businesses to stay compliant with government policies while benefiting from local innovation and support.",
    },
    {
      q: "Who can benefit from UVSecure's services?",
      a: "Our services apply to all sectors—startups, SMEs, large enterprises, PSUs, defense-linked organizations, BFSI, healthcare, manufacturing, telecom, and ed-tech institutions. Any organization handling digital data, infrastructure, or connected systems benefits from stronger cybersecurity governance and indigenous security deployments.",
    },
    {
      q: "Do you serve clients nationwide?",
      a: "Yes. UVSecure operates across India through on-site, hybrid, and remote service models. Whether you're in a metro city or a tier-3 region, you receive the same quality of support, assessments, implementation, and long-term engagement.",
    },
  ],

  "About Indigenous Products": [
    {
      q: "Why choose indigenous cybersecurity products?",
      a: "Indigenous cybersecurity products ensure data sovereignty—your data stays in India, under Indian regulations. They reduce dependency on foreign vendors who may have hidden data-sharing policies. They also support local innovation, offer quick support cycles, comply with Indian standards, and often cost less than foreign alternatives while providing enterprise-grade protection.",
    },
    {
      q: "Are indigenous products as effective as international ones?",
      a: "Absolutely. Modern Indian security products are built to compete with global giants, offering advanced detection engines, AI-powered analytics, threat modeling, and enterprise support. At UVSecure, we evaluate products deeply and only recommend solutions that meet global benchmarks and performance expectations.",
    },
    {
      q: "What is Phish-E and Phishiq?",
      a: "Phish-E and Phishiq are indigenous email security and phishing-defense platforms that protect organizations from spear phishing, social engineering, credential harvesting attacks, and malicious email payloads. They include sandboxing, behavioral detection, employee awareness modules, real-time threat blocking, and automated reporting for admins.",
    },
    {
      q: "Can indigenous products integrate with existing systems?",
      a: "Yes. Most indigenous security products are built with open standards and compatibility in mind. They integrate seamlessly with SIEMs, SOC tooling, cloud platforms, enterprise apps, HRMS systems, identity providers, and legacy software stacks.",
    },
  ],

  "Services & Solutions": [
    {
      q: "What is Red Team & Adversary Simulation?",
      a: "Red Teaming is a high-level security exercise where ethical hackers simulate real-world cyberattacks to identify how deeply an attacker can penetrate your systems. It tests not just technology but also human behavior, processes, and organizational resilience. The goal is to uncover blind spots that traditional testing cannot detect.",
    },
    {
      q: "Difference between Pen-Testing and Red Teaming?",
      a: "Penetration Testing focuses on finding technical vulnerabilities in specific applications, networks, or APIs. Red Teaming is broader and more realistic—it simulates full-scale attacks to test detection, response, and the effectiveness of people, systems, and processes under pressure.",
    },
    {
      q: "What is GRC?",
      a: "Governance, Risk & Compliance (GRC) is a structured framework that helps organizations define security policies, manage operational and cybersecurity risk, and stay compliant with Indian and international regulations. UVSecure provides end-to-end GRC advisory, implementation, documentation, and audit readiness services.",
    },
    {
      q: "What is AI & LLM Security Testing?",
      a: "AI & LLM Security Testing focuses on identifying vulnerabilities in AI-driven systems. This includes prompt manipulation, model poisoning, data privacy risks, fine-tuning attacks, model extraction attempts, hallucination monitoring, and alignment issues. We ensure that AI deployments remain safe, ethical, and secure.",
    },
  ],

  "Engagement & Pricing": [
    {
      q: "How to get started?",
      a: "The engagement process is straightforward: (1) Book a consultation, (2) Share high-level requirements, (3) We conduct a maturity-based assessment, (4) You receive a custom proposal, (5) Project execution begins, followed by long-term support if required.",
    },
   {
     q: "Typical engagement timeline?",
      a: "Consultation & assessment typically take 1–2 weeks. Penetration testing takes 2–4 weeks depending on scope and complexity. Red Team operations take 2–6 weeks. Security implementation takes 4–8 weeks, and training programs range from 1 day to several weeks depending on requirements."
    },
    {
      q: "Pricing models?",
      a: "UVSecure offers project-based pricing, retainer-based SOC partnerships, hybrid models for long-term engagements, and custom enterprise packages based on scale, tool selection, and regulatory requirements.",
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes. We provide continuous monitoring, security assessments, policy updates, employee training, and 24/7 incident response support for retainer clients. Our support structure ensures operational continuity and minimal downtime.",
    },
  ],

  "Compliance & Security": [
    {
      q: "Supported compliance frameworks?",
      a: "We support ISO 27001, CERT-In compliance, DPDPA, HIPAA, RBI cybersecurity guidelines, cloud compliance frameworks, and industry-specific audit requirements. Our team helps with documentation, gap analysis, risk assessments, and audit preparation.",
    },
    {
      q: "How do you ensure confidentiality?",
      a: "Confidentiality is maintained through strict NDAs, encrypted reporting, isolated testing environments, least-privilege access models, and secure data disposal procedures. Sensitive data never leaves the client's environment unless authorized.",
    },
    {
      q: "Are your professionals certified?",
      a: "Yes—our experts hold certifications such as OSCP, CEH, CISSP, ISO Lead Auditor, cloud security certifications, threat intelligence training, and red team specialization credentials.",
    },
  ],

  "Technical Questions": [
    {
      q: "Can you work with our internal security team?",
      a: "Absolutely. We collaborate with internal IT and cybersecurity teams, offer co-managed support, improve SOC maturity, provide training, and strengthen response mechanisms. Our goal is to act as an extension of your security workforce.",
    },
    {
      q: "Do you support cloud security?",
      a: "Yes. We secure AWS, Azure, GCP, and India-based cloud providers, covering configuration audits, IAM hardening, container security, serverless assessments, and cloud-native threat detection.",
    },
    {
      q: "What is Sensitive Data Leakage Monitoring?",
      a: "This is a proactive service where we monitor dark web sources, paste sites, leaked credential databases, misconfigured cloud buckets, exposed code repositories, and public forums for any unauthorized exposure of your business data.",
    },
  ],

  "Indigenous Ecosystem": [
    {
      q: "How do you contribute to Atmanirbhar Bharat?",
      a: "UVSecure actively promotes indigenous cybersecurity by partnering with Indian security product companies, training professionals, advocating for digital sovereignty, and enabling organizations to adopt homegrown tools. This strengthens India's technological independence.",
    },
    {
      q: "Government incentives?",
      a: "Organizations that adopt indigenous products often gain benefits such as favorable tender scoring, compliance alignment with government cybersecurity directives, cost efficiency, and long-term ecosystem reliability.",
    },
  ],
};

const FAQCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-white/5 border border-white/10 rounded-xl p-5 cursor-pointer hover:bg-white/10 transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown className="text-white" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-slate-300 mt-3 text-m leading-relaxed"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  return (
    <div
      className="min-h-screen w-full text-white px-6 py-20"
      style={{
        background:
          "radial-gradient(circle at top left, #361ea1ff 0%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

      {Object.keys(faqData).map((category, idx) => (
        <section key={idx} className="max-w-5xl mx-auto mb-14">
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-purple-400 pl-4">
            {category}
          </h2>

          <div className="space-y-4">
            {faqData[category].map((item, faqIndex) => (
              <FAQCard key={faqIndex} question={item.q} answer={item.a} />
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto mt-20">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-slate-300 mb-4">
            We're here to support your security journey. Reach out anytime.
          </p>
          <ul className="space-y-2 text-slate-200">
            <li> <a href="mailto:info.uvsecure@gmail.com" className="flex items-center gap-2"> <Mail size={18}/> Email: info.uvsecure@gmail.com</a>  </li>
            <li> <a href="tel:+918826532520" className=" flex items-center gap-2">
              <Phone size={18}/> +91 88265 32520
            </a></li>
            <li> <div className="flex items-center gap-2"><MessageSquare size={18}/> Live Chat: Available on our website</div> </li>
            <li> <div className="flex items-center gap-2"><Calendar size={18}/> Schedule a Call: Book a consultation</div> </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
