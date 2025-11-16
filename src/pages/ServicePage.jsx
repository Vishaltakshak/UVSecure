import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import servicesData from "../Data/serviceData.json";

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

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = servicesData.services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl">
        Service not found.
      </div>
    );
  }

 
  const heroImg = service.hero?.img || service.hero?.imgUrl;
  const heroTitle = service.hero?.title || service.title;
  const heroDescription = service.hero?.description || service.tagline;

  return (
   
    <div
      className="w-full min-h-screen text-slate-200"
      style={{
        background:
          "linear-gradient(180deg, #4A2FBD 20%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)", 
      }}
    >
      
      <section className="relative w-full h-[550px] pt-20 flex items-center justify-center text-white overflow-hidden"> 
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
              className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200"
            >
              {heroDescription}
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Main Alternating Sections */}
      {service.sections && (
        <motion.div
          className="max-w-6xl mx-auto px-6 py-20 space-y-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {service.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
            >
              {/* Text Block */}
              <div
                className={`w-full md:w-1/2 space-y-5 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <h2 className="text-3xl font-semibold text-white">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                )}

                {section.description && (
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {section.description}
                  </p>
                )}

                {section.points && (
                  <ul className="space-y-2 pt-2">
                    {section.points.map((point, i) => (
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
                )}
              </div>

              {/* Image Block */}
              {(section.img || section.imgUrl) && (
                <motion.div
                  className={`w-full md:w-1/2 shadow-[0_0_25px_rgba(114,70,253,0.35)] ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={section.img || section.imgUrl}
                    alt={section.title}
                    className="rounded-xl shadow-lg w-full h-72 object-cover" // Reduced height to h-72
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Feature Section */}
      {service.featureSection && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-semibold text-center text-white mb-12"
            >
              {service.featureSection.heading}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {service.featureSection.features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 "
                >
                  {feature.imgUrl && (
                    <img
                      src={feature.imgUrl}
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-md mb-5"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 mb-4">
                    {feature.description}
                  </p>
                  {feature.keyFeatures && (
                    <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                      {feature.keyFeatures.map((keyFeature, k) => (
                        <li key={k}>{keyFeature}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

     
      {service.methodology && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h3
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-semibold mb-12 text-white"
            >
              {service.methodology.title || "Our Methodology"}
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {service.methodology.steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-slate-100 font-medium"
                >
                  {step}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
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

export default ServicePage;