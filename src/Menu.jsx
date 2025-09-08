import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/SmartHome"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
            }
          >
            Smart Home
          </NavLink>
          <NavLink
            to="/WhyPandaX"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
            }
          >
            Why PandaX
          </NavLink>
          <NavLink
            to="/Support"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "hover:text-blue-300"
            }
          >
            Support
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          <NavLink to="/SmartHome" className="block py-2 hover:text-blue-300">
            Smart Home
          </NavLink>
          <NavLink to="/WhyPandaX" className="block py-2 hover:text-blue-300">
            Why PandaX
          </NavLink>
          <NavLink to="/Support" className="block py-2 hover:text-blue-300">
            Support
          </NavLink>
        </div>
      )}
    </nav>
  );
}
