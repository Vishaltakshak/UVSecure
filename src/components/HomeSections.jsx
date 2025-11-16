import React from "react";

import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};


const IconIndia = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-300"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 2L12 12"></path>
  </svg>
);

const IconDiamond = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-300"
  >
    <path d="M2.7 10.3a2.4 2.4 0 0 0 0 3.4l7.6 7.6c.8.8 2.1.8 2.9 0l7.6-7.6a2.4 2.4 0 0 0 0-3.4L13.1 2.7c-.8-.8-2.1-.8-2.9 0L2.7 10.3z"></path>
    <path d="M12 22V12"></path>
  </svg>
);

const IconTarget = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-300"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const IconQuote = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-purple-500 opacity-30 absolute top-4 left-4"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 9.609l-.001-2.909c2.406-.219 4.001-1.606 4.001-4.033 0-1.217-.933-1.853-1.923-1.853-.984 0-1.908.698-1.908 1.838h-3.15c-.021-3.255 2.16-5.874 5.923-5.874.351-.001 1.011-.001 1.011-.001zm13.001 0v7.391c0 5.704-3.731 9.57-8.983 9.609l-.001-2.909c2.406-.219 4.001-1.606 4.001-4.033 0-1.217-.933-1.853-1.923-1.853-.984 0-1.908.698-1.908 1.838h-3.15c-.021-3.255 2.16-5.874 5.923-5.874.351-.001 1.011-.001 1.011-.001z" />
  </svg>
);

// --- WHY CHOOSE US CARD DATA ---
const whyChooseUsData = [
  {
    icon: <IconIndia />,
    title: "Proudly Made in India",
    description:
      "Engineered by India's top minds, for global security challenges. We bring indigenous innovation to the forefront of cyber defense.",
  },
  {
    icon: <IconDiamond />,
    title: "Best-in-Class Solutions",
    description:
      "Our products and services are rigorously tested and market-leading, offering you unparalleled protection and performance.",
  },
  {
    icon: <IconTarget />,
    title: "Affordable, Top-Notch Results",
    description:
      "Accessible for individuals and small organizations, we provide elite, top-tier results without the prohibitive price tag.",
  },
];

const reviewData = [
  {
    quote:
      "Their platform was a game-changer. Affordable, powerful, and gave us top-notch results from day one. The 'Made in India' aspect is a huge bonus!",
    author: "CTO, FinTech Startup",
  },
  {
    quote:
      "As a small organization, we needed a solution that was both effective and affordable. They delivered on all fronts. Truly the best service in the market.",
    author: "IT Manager, Logistics Co.",
  },
  {
    quote:
      "The results are undeniable. We've cut our security incidents by 70% since switching. Their team provides incredible support.",
    author: "CISO, Manufacturing Firm",
  },
];

export default function HomeSections() {
  return (
   
    <div
      className="w-full min-h-screen text-slate-200 bg-[#020617] overflow-x-hidden"
      // style={{
      //   background:
      //     "radial-gradient(circle at top left, #7246FD 0%, #0A2D5F 70%)",
      // }}
    >
      

 
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          What Makes Us Different?
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {whyChooseUsData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex flex-col items-start transition-all duration-300 hover:bg-white/10"
            >
              <div className="p-3 rounded-full bg-purple-900/30 border border-purple-500/50 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

  
      <motion.section
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviewData.map((review, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
            >
              <IconQuote />
              <p className="text-slate-200 text-lg leading-relaxed z-10 relative pt-8">
                "{review.quote}"
              </p>
              <p className="text-purple-300 font-medium mt-6 z-10 relative">
                - {review.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}