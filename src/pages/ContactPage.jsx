import React, { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "https://cdn.skypack.dev/@sanity/client";

const SANITY_PROJECT_ID = "s3w0yyol";
const SANITY_DATASET = "production"; 

const SANITY_API_TOKEN = "skno2xLgEtXDLQo8ATVKsmsyFTv0IXNHOcdM85x46S72AFiJ5de297zJIGvn6TlDSz39Dn6snw6bEUBLr5qI7mXxsl2KTDfQUoZFQorWj6zm8auHqYekSbX5TVJvlpc93kMFPMZE0cQJv8lnK4NbfUbWn9NOI0N9UfpV8K2BdMQfqIlzO3zB";

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_API_TOKEN,
  useCdn: false, 
  apiVersion: "2023-05-03", 
});


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


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    PhoneNo: "", 
    message: "",
  });
  const [formState, setFormState] = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return;
    }

    setFormState("loading");


    const submission = {
      _type: "contactSubmission", 
      name: formData.name,
      email: formData.email,
      company: formData.company,
      PhoneNo: formData.phoneno, 
      message: formData.message,
      submittedAt: new Date().toISOString(),
    };

    try {
     
      await sanityClient.create(submission);
      setFormState("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        PhoneNo: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form to Sanity:", error);
      setFormState("error");
    }
  };

  return (
    <div
      className="w-full min-h-screen text-slate-200 overflow-x-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, #4A2FBD 0%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)",
      }}
    >
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
          >
            We're here to answer your questions and help you build a more
            resilient defense.
          </motion.p>
        </motion.div>

        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-lg border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoFocus
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@company.com"
                />
              </div>
            </div>

          
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Acme Inc."
                />
              </div>
              <div>
                <label
                  htmlFor="phoneno"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phoneno"
                  id="phoneno"
                  value={formData.PhoneNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+(91) 123-4567"
                />
              </div>
            </div>
           
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="How can we help you?"
              ></textarea>
            </div>

          
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full sm:w-auto px-10 py-3 rounded-lg font-semibold text-white bg-[#0A1C3C] hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? "Sending..." : "Send Message"}
              </button>

             
              {formState === "success" && (
                <span className="text-white">
                  Thank you! Your message has been sent.
                </span>
              )}
              {formState === "error" && (
                <span className="text-red-400">
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;