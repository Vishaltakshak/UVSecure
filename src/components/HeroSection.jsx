import React from "react";

const HeroSection = () => {
  return (
    <section
       className="relative grid grid-cols-1 md:grid-cols-2 items-center  text-white px-6 md:px-12 overflow-hidden pt-[6rem]  pb-12"
      style={{
        background: "radial-gradient(circle at top left, #7246FD 0%, #0A2D5F 70%)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

 
      <div className="relative z-10 flex flex-col justify-center space-y-6 md:pr-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Secure. Defend. <span className="text-[#7246FD]">Transform.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-md">
          Empowering organizations with cutting-edge cybersecurity consulting and solutions.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link to ='/contact-us'>
          <button className="bg-[#7246FD] hover:bg-[#5f38d0] px-6 py-3 rounded-lg font-semibold transition shadow-[0_0_20px_#7246FD]/50">
            Get a Demo
          </button>

          </Link>
          <Link to='/about-us'>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0A2D5F] transition">
            Learn More
          </button>
          </Link>
        </div>
      </div>

      {/* RIGHT VIDEO SECTION */}
      <div className="relative z-10 flex justify-center mt-10 md:mt-0">
        <div className="relative w-[99%] md:w-[98%] rounded-xl overflow-hidden border border-white/10 
          shadow-[0_0_50px_rgba(114,70,253,0.2)] backdrop-blur-[2px]">
          
          {/* Video with filter for blending */}
          <video
            src="/assests/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover opacity-80 mix-blend-soft-light"
            style={{ filter: "brightness(0.85) saturate(0.7)" }}
          ></video>

        
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2D5F]/60 via-transparent to-[#7246FD]/40"></div>

          
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_100px_#7246FD]/30 pointer-events-none"></div>
        </div>
      </div>

      {/* Decorative blurred glow in background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#7246FD] rounded-full blur-[180px] opacity-25"></div>
    </section>
  );
};

export default HeroSection;
