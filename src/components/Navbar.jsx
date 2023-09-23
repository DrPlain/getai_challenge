import { useState } from "react";
import { Link } from "react-router-dom";
import toggleOpen from "../assets/images/Vector.png";
import toggleClose from "../assets/images/Vectorclose.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#150E28] p-4 fixed top-0 w-full">
      <div className="container mx-auto flex pl-4 justify-between items-center ">
        {/* <span className="bg-gradient-to-r from-[#150E28] via-[#903AFF] to-[#150E28]">

        </span> */}
        <div className={`text-white font-bold text-lg ${isOpen && "hidden"}`}>
          <Link to="/">
            get<span className="text-[#D434FE]">linked</span>
          </Link>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block text-white font-montserrat">
          <ul className="space-x-10">
            <li className="inline">
              <Link to="/">Timeline</Link>
            </li>
            <li className="inline">
              <Link to="/">Overview</Link>
            </li>
            <li className="inline">
              <Link to="/">FAQs</Link>
            </li>
            <li className="inline">
              <Link to="/contact-form">Contact</Link>
            </li>
            <li className="inline pl-20">
              <Link to="/registration">
                <button className="rounded text-white px-6 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-300 focus:outline-none fixed right-12 top-6"
          >
            {!isOpen ? (
              <img src={toggleOpen} alt="toggle icon open" />
            ) : (
              <img src={toggleClose} alt="toggle icon close" />
            )}
          </button>
        </div>

        {/* Mobile view */}
        {isOpen && (
          <div className="md:hidden h-[300px] rounded">
            <ul className="fixed left-8 top-20 text-white font-montserrat">
              <li className="p-2">
                <Link to="/" onClick={toggleNavbar}>
                  Timeline
                </Link>
              </li>
              <li className="p-2">
                <Link to="/" onClick={toggleNavbar}>
                  Overview
                </Link>
              </li>
              <li className="p-2">
                <Link to="/" onClick={toggleNavbar}>
                  FAQs
                </Link>
              </li>
              <li className="p-2 pb-4">
                <Link to="/contact-form" onClick={toggleNavbar}>
                  Contact
                </Link>
              </li>
              <li className="p-2">
                <Link to="/registration" onClick={toggleNavbar}>
                  <button className="rounded w-full px-10 py-2 bg-gradient-to-r from-[#D434FE] via-[#D434FE] to-[#903AFF]">
                    Register
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
