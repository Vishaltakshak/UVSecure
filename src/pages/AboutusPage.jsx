import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
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

const AboutPage = () => {
  return (
    <div
      className="w-full min-h-screen text-slate-200 overflow-x-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #4A2FBD 0%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)",
      }}
    >
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
          <div className="w-full h-full rounded-full bg-purple-700 opacity-20 blur-[150px]"></div>
          <div className="absolute inset-20 w-auto h-auto rounded-full border-[1px] border-purple-400 opacity-30 animate-pulse"></div>
          <div className="absolute inset-40 w-auto h-auto rounded-full border-[1px] border-purple-500 opacity-20"></div>
        </div>

        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About UVSecure
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300"
          >
            Championing Indigenous Cybersecurity Excellence for a Secure and Self-Reliant Digital India.
          </motion.p>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-white">
            Our Story
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-300 text-lg leading-relaxed">
            In an era of rapidly evolving cyber threats, UVSecure emerged with one mission: to protect Indian organizations
            using powerful, fully indigenous cybersecurity products and services. India needed more than security—it needed
            sovereignty. Our work aligns with the Atmanirbhar Bharat initiative, proving that world-class defense can be
            built right here at home.
          </motion.p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-white mb-4">
            Our Mission
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed">
            To empower Indian enterprises with industry-leading indigenous solutions that secure critical assets,
            strengthen digital resilience, and reinforce India’s cybersecurity independence.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-white mb-4">
            Our Vision
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed">
            To become India’s most trusted cybersecurity consultancy—renowned for indigenous excellence,
            enterprise-grade protection, and innovation that rivals global standards.
          </motion.p>
        </motion.div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-white mb-10 text-center"
        >
          What Sets Us Apart
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Indigenous-First Philosophy</h3>
            <p className="text-slate-300">
              We exclusively deploy Made-in-India cybersecurity products—promoting sovereignty, stability, and strategic
              independence.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Expertise</h3>
            <p className="text-slate-300">
              Our certified specialists excel across offensive, defensive, compliance, and emerging technology domains.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Tailored Solutions</h3>
            <p className="text-slate-300">
              Every organization is unique—we architect custom solutions aligned with your industry, risks, and objectives.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Continuous Innovation</h3>
            <p className="text-slate-300">
              Cyber threats evolve rapidly—so do we, continually evaluating cutting-edge indigenous tools and strategies.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY INDIGENOUS MATTERS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-center text-white mb-6">
            Why Indigenous Cybersecurity Matters
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-200 font-semibold text-xl text-justify text-lg leading-relaxed mb-8 ">
            Reliance on foreign cybersecurity introduces strategic and sovereignty risks. Indigenous solutions provide
            stronger protection, regulatory alignment, and long-term national resilience.
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 m-auto text-slate-300 text-lg">
            <li>• <span className="text-white font-semibold ">Enhanced Data Sovereignty –</span>  Keep sensitive data within India</li>
            <li>• <span className="text-white font-semibold ">Strategic Independence –</span>  Reduce dependency on foreign vendors</li>
            <li>• <span className="text-white font-semibold ">Local Support –</span>  Fast, responsive India-based assistance</li>
            <li>• <span className="text-white font-semibold ">Regulation-Aligned –</span>  Built with Indian frameworks in mind</li>
            <li>• <span className="text-white font-semibold ">Economic Growth –</span>  Strengthening India’s cybersecurity ecosystem</li>
          </motion.ul>
        </motion.div>
      </section>

      {/* OUR APPROACH */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-white mb-10"
        >
          Our Approach
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {["Assess", "Design", "Deploy", "Train", "Monitor", "Respond"].map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{step}</h3>
              <p className="text-slate-300 text-sm">
                {index === 0 && "Evaluate your entire security posture with precision."}
                {index === 1 && "Architect indigenous-first solutions tailored to your needs."}
                {index === 2 && "Implement seamlessly with minimal business disruption."}
                {index === 3 && "Empower your team through targeted skill development."}
                {index === 4 && "Provide continuous monitoring and iterative improvement."}
                {index === 5 && "Deliver rapid, expert-led incident response."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-white mb-4"
        >
          Let's Build a Secure Digital India Together
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-300 max-w-2xl mx-auto"
        >
          At UVSecure, we don't just deliver security—we build partnerships. Whether you're a startup, SME, or enterprise,
          we're committed to safeguarding your digital future with world-class indigenous defense.
        </motion.p>
      </section>
       <div className="max-w-[80%] pb-8 mb-8 mx-auto p-8 md:p-12 rounded-lg  bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Are You Ready to Secure Your Organization?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            Our team of experts is ready to help you identify vulnerabilities
            and build a resilient defense. Let's talk.
          </p>
          <Link
            to="/contact-us" 
            className="inline-block px-8 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
    </div>
  );
};

export default AboutPage;
