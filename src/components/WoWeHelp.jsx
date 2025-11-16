import { motion } from "framer-motion";

export default function WhoWeHelp() {
  const imageMap = {
    individual: "../assests/who2.jpg",
    startup: "../assests/who4.jpg",
    enterprise: "../assests/who3.jpg"
  }
  return (
    <section
      className="w-full py-20 px-6 text-white"
      // style={{
      //   background: "radial-gradient(circle at top left, #4b2fb3 0%, #071d3d 70%)",
      // }}
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* WHO WE HELP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl text-center font-bold tracking-tight">
            Who We Help
          </h2>

          <p className="text-gray-300 m-auto  max-w-3xl"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            We empower individuals, startups, and established enterprises with
            resilient cybersecurity frameworks engineered for today’s evolving
            threat landscape. Whether you're building from scratch or scaling at
            enterprise level, we deliver tailored protection built for every
            stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                key:"individual",
                t: "Individuals",
                d: "Personal-grade cybersecurity for freelancers, remote workers, and digital-first creators who need airtight protection.",
              },
              {
                key : "startup",
                t: "Startups & New Businesses",
                d: "Security foundations engineered for rapid growth, lean teams, and high-speed execution.",
              },
              {
                key: "enterprise",
                t: "Established Organizations",
                d: "Enterprise-grade defense optimized for scale, compliance, and high-value data assets.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(
                      rgba(0, 0, 0, 0.55),
                      rgba(0, 0, 0, 0.65)
                    ), url(${imageMap[item.key]})`,
                  }}
                />
                <div className="relative  z-10 p-6 min-h-[100%] backdrop-blur-[2px] bg-white/5 group-hover:bg-white/10 transition-all  flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white">
                    {item.t}
                  </h3>
                  <p className="text-gray-300">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HOW WE HELP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-center tracking-tight">How We Help</h2>
          <p
          className="text-gray-300 m-auto max-w-3xl leading-relaxed"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          Our security solutions combine real-world threat intelligence,
          high-performance engineering, and frictionless user experience to
          deliver unmatched protection.
        </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                t: "Real Threat Database",
                d: "Every solution is trained and tested against live, continuously updated threat intelligence.",
              },
              {
                t: "Performance-Engineered Software",
                d: "Lightning-fast, stable systems with zero lag, optimized for mission-critical uptime.",
              },
              {
                t: "Customizable Security Plans",
                d: "Flexible packages adapted to your workflow, scale, and regulatory needs.",
              },
              {
                t: "Adaptive & Evolving",
                d: "Security stacks that evolve with your infrastructure and adjust to new vulnerabilities.",
              },
              {
                t: "Transparent Pricing",
                d: "No hidden charges — ever. Simple, predictable, high-value plans.",
              },
              {
                t: "Full-Spectrum Support",
                d: "Round-the-clock assistance with expert-level response teams.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{item.t}</h3>
                <p className="text-gray-300">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}