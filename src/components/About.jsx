import { useEffect, useRef, useState } from "react";
import { Target, Users, Heart } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            className={`flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-500 border border-gray-200 shadow-sm bg-white rounded-2xl backdrop-blur-sm p-6 md:p-8 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Who We Are
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
                The <strong>Kiran Foundation</strong> Trust established in the
                year 2012, Kiran Foundation is not just about contributing
                towards upliftment of the underprivileged but also associating
                ourselves with the cause & being an integral part of the
                solution. We have enthusiastic team, keen on bringing a
                meaningful difference to lives & spreading smiles, works hard
                towards creating social awareness about several important issues
                of the society like basic healthcare and rehabilitation and
                water resource, empowerment of women and girls from poor and
                marginalized communities, leading to improvement in their lives
                and livelihoods. We work in informal approach proactively offer
                a hand holding support to communities. The Kiran Foundation
                operates with the single-minded focus of empowering rural India
                through holistic & sustainable growth by engaging with and
                empowering village communities, executing multiple program on
                the ground level.
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between h-full group hover:shadow-2xl transition-all duration-500 border border-gray-200 shadow-sm bg-white rounded-2xl backdrop-blur-sm p-6 md:p-8 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
                We aim to create awareness around critical social issues like
                healthcare, water access, women's empowerment, and education.
                Our mission is to drive sustainable growth through integrated
                community development and long-term solutions.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-4  max-h-[80vh] md:p-7 text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="text-center mb-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shadow-amber-500">
              Our Management
            </h3>
            <div className="w-30 h-1 bg-white/50 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>

            <h4 className="text-xl md:text-2xl font-semibold text-center mb-4 text-white">
              Ms. Jayshree Varhade <br />
              (President & Founder Member)
            </h4>
            <p className=" leading-relaxed text-sm sm:text-base md:text-lg text-justify text-white">
              In the journey of an individual's life, the society contributes
              immensely in making the journey comfortable. Mrs. Jayshree Varhade
              believes in giving back to society by empowering women, reaching
              out to needy children, and making valuable contributions for a
              better environment. Her actions speak louder than words, as she
              selflessly extends a helping hand to all those in need.
            </p>
          </div>

          <div
            className={`text-center mt-10 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("#work")}
            >
              See Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
