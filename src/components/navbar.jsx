import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Activities", href: "#activities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Donate", href: "#donate" },
    { name: "Contact Us", href: "#contact" },
  ];

useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 150;

    if (window.scrollY < 300) {
      setActiveSection("");
      return;
    }

    for (let i = 0; i < navLinks.length; i++) {
      const section = document.querySelector(navLinks[i].href);
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on load
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="kflogo.png" alt="Logo" className="h-15 w-60" />
        </a>

        <button
          className="md:hidden text-gray-900 hover:text-red-600 transition"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative p-3 rounded-xl transition duration-300 group ${
                  activeSection === link.href
                    ? "bg-yellow-100 text-red-600"
                    : "hover:bg-yellow-100 hover:text-red-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all ${
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-[80vh] bg-white flex flex-col justify-between items-center p-4 animate-fadeIn z-50">
          <img src="kflogo.png" alt="Logo" className="h-24 mt-5" />

          <ul className="flex flex-col space-y-4 text-xl font-semibold text-gray-800 text-center mt-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative transition py-3 mt-8 px-16 duration-300 rounded-xl m-5 group ${
                    activeSection === link.href
                      ? "bg-yellow-100 text-red-600 "
                      : "hover:bg-yellow-100 py-3 hover:px-16 hover:text-red-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-red-600 transition-all ${
                      activeSection === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <button
            className="text-gray-700 hover:text-red-600 mt-auto"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
