import React from "react";
import { motion } from "framer-motion";
import {Link, useParams } from "react-router-dom";
import productData from "../Data/product.json";


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
      staggerChildren: 0.1,
    },
  },
};

const SectionContent = ({ section }) => {

  if (section.paragraphs) {
    return (
      <div className="space-y-4">
        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-300 leading-relaxed text-lg">
            {p}
          </p>
        ))}
      </div>
    );
  }

  // Type 2: Features (like 'points' in ServicePage)
  if (section.features) {
    return (
      <ul className="space-y-2 pt-2">
        {section.features.map((point, i) => (
          <li key={i} className="flex items-center gap-3">
            <svg
              className="w-5 h-5 text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-slate-300">{point}</span>
          </li>
        ))}
      </ul>
    );
  }

  // Type 3: Metrics
  if (section.metrics) {
    return (
      <div className="grid grid-cols-2 gap-6 pt-2">
        {section.metrics.map((metric, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
            <div className="text-2xl font-semibold text-blue-300 mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-slate-400">{metric.title}</div>
          </div>
        ))}
      </div>
    );
  }

  // Type 4: Subsections
  if (section.subsections) {
    return (
      <div className="space-y-6 pt-2">
        {section.subsections.map((sub, i) => (
          <div key={i}>
            <h4 className="text-lg font-semibold text-blue-300 mb-2">{sub.title}</h4>
            <ul className="space-y-2">
              {sub.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 flex-shrink-0">&#8227;</span>
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }


  return null;
};


const ProductPage = () => {
  const { productId } = useParams(); 
  const product = productData.products.find((p) => p.id === productId);
  console.log(product)

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-gray-400 text-xl"
        style={{
          background:
            "radial-gradient(circle at top left, #4a2fbd 0%, #0A2D5F 70%)",
        }}
      >
        Product not found.
      </div>
    );
  }


  const heroImg = product.hero?.image;
  const heroTitle = product.hero?.heading;
  const heroDescription = product.hero?.subheading;


  return (
    
    <div
      className="w-full min-h-screen text-slate-200"
      style={{
        background:
          "linear-gradient(180deg, #4A2FBD 20%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)"
      }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center text-white overflow-hidden pt-4">
        {heroImg ? (
          <img
            src={heroImg}
            alt={heroTitle}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        ) : (
          <div className="absolute inset-0 bg-black opacity-30"></div>
        )}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {heroTitle}
          </motion.h1>
          {heroDescription && (
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 mb-8"
            >
              {heroDescription}
            </motion.p>
          )}
     
          
        </motion.div>
      </section>

   
      {product.sections && (
        <motion.div
          className="max-w-6xl mx-auto px-6 py-20 space-y-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {product.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
            >
              {/* Text Block */}
              <div
                className={`w-full md:w-1/2 space-y-5 ${
                 
                  section.layoutReverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-3xl font-semibold text-white">
                  {section.heading}
                </h2>
               
                <SectionContent section={section} />
              </div>

             
              {section.image && (
                <motion.div
                  className={`w-full md:w-1/2 ${
                    
                    section.layoutReverse ? "md:order-2" : "md:order-1"
                    
                  }`
                   
                }
                 style={{ filter: "brightness(0.85) saturate(0.7)" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                     style={{ filter: "brightness(0.85) saturate(0.7)" }}
                    onError={(e) => {
                      
                      e.currentTarget.src = 'https://placehold.co/600x400/0A2D5F/4a2fbd?text=Image+Not+Found';
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
       <motion.section
        className="max-w-4xl mx-auto px-6 py-20 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="p-8 md:p-12 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Strengthen Your Cyber Defenses?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Partner with UVSecure to build a robust security foundation with indigenous solutions designed for Indian organizations.
          </p>
          <Link
            to="/contact-us" 
            className="inline-block px-8 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductPage;