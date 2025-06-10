import React, { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => setIsVisible(true), []);
  useEffect(() => {
    const move = (e) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const slides = [
    {
      title: "Welcome To Kiran Foundation",
  subtitle: "Sustainable Impact. Shared Progress.",
  description:
    "Since 2012, Kiran Foundation has been a beacon of hope for underprivileged communities. Our mission is to empower individuals through education, healthcare, women’s empowerment, and rural development. By nurturing dignity, opportunity, and resilience, we strive to create a society where every life has equal value and every voice is heard.",
  src: './src/assets/Hero/backg.gif',
  

    },
    {
      title: "Welcome To Kiran Foundation",
      subtitle: "Inspiring Progress. Empowering Lives.",
      description:
        "Kiran Foundation is a Nagpur based non-profit organization, striving to help the underprivileged, troubled & weaker sections of the community to lead a dignified life to build a powerful & viable society.",
      src:'./src/assets/Hero/backg.gif',
      
    },
    

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-180 pt-30 flex items-center justify-center overflow-hidden" ref={heroRef}>
    
        <div className="mt-10 absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-100 backdrop-blur-sm transition-all duration-1000 z-10" >

  <img
    src={slides[currentSlide].src}
    alt="Background GIF"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 overflow-hidden">
          {[[-20, -20, "top-20 left-10 w-32 h-32", "pulse"],
            [30, 30, "top-40 right-20 w-24 h-24", "bounce delay-300"],
            [-40, -40, "bottom-20 left-20 w-40 h-40", "pulse delay-700"],
            [25, 25, "bottom-40 right-10 w-20 h-20", "bounce delay-1000"],
            [-15, -15, "top-1/2 left-1/4 w-16 h-16", "pulse delay-500"],
            [35, 35, "top-1/3 right-1/3 w-28 h-28", "bounce delay-200"]
          ].map(([xMul, yMul, pos, anim], i) => (
            <div key={i} className={`absolute ${pos} bg-white/10 rounded-full animate-${anim}`}
              style={{
                transform: `translate(${mousePosition.x * xMul}px, ${mousePosition.y * yMul}px)`,
                transition: "transform 0.2s ease-out"
              }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[
            ["top-0 left-1/4 w-1", "rotate-[20deg]"],
            ["top-0 left-1/3 w-0.5", "rotate-[15deg] delay-300"],
            ["top-0 right-1/4 w-1", "rotate-[-20deg] delay-700"],
            ["top-0 right-1/3 w-0.5", "rotate-[-15deg] delay-500"]
          ].map(([pos, anim], i) => (
            <div key={i} className={`absolute ${pos} h-full bg-white/30 animate-pulse-slow ${anim}`}></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ animationDelay: "0.4s" }}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent leading-tight animate-gradient-text">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-8 text-orange-200 animate-fade-in">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="max-w-4xl mx-auto mb-10 text-base md:text-lg lg:text-xl text-gray-200 text-justify animate-fade-in-up">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ animationDelay: "0.6s" }}>
          <button
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-700 hover:from-orange-700 hover:via-orange-500 hover:to-yellow-400 text-white px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
            onClick={() => scrollToSection("#about")}
          >
            <span className="relative z-10 mr-2">Explore</span>
           <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
            <div className="absolute top-0 -left-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:animate-shine"></div>
          </button>
        </div>

        <div className={`flex justify-center space-x-3 mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ animationDelay: "0.8s" }}>
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)}
              className={`relative transition-all duration-500 ${index === currentSlide ? "w-12 h-3 bg-white rounded-full scale-125" : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/75 hover:scale-110"}`}>
              {index === currentSlide && <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
