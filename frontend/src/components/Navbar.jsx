import { NavLink } from "react-router";
import Search from "./Search";
import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="bg-white shadow-md">
      {/* desktop menu and icon */}
      <div className="container max-w-7xl mx-auto px-3 py-4 flex justify-between items-center gap-4">
        {/* logo */}
        <div>
          <a href="#">
            <img src="/logo.png" alt="logo" />
          </a>
        </div>
        {/* Menu Items */}
        <ul className="md:flex hidden space-x-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-secondary"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-secondary"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary" : "hover:text-secondary"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* search icon */}
        <div className="md:flex hidden items-center space-x-4">
          <Search />
          <div
            className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              darkMode ? "justify-end" : "justify-start"
            }`}
          >
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-6 h-6 rounded-full shadow-md flex justify-center items-center transition-transform duration-300 cursor-pointer"
            >
              {darkMode ? (
                <FaMoon className="text-gray-500" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
        {/* Menu bars  */}
        <div className="md:hidden block">
          <button onClick={toggleMenuOpen}>
            {isMenuOpen ? <IoClose /> : <HiMiniBars3BottomRight />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700">
              <li onClick={toggleMenuOpen}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-secondary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li onClick={toggleMenuOpen}>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-secondary"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li onClick={toggleMenuOpen}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-secondary"
                  }
                >
                  About
                </NavLink>
              </li>
              <li onClick={toggleMenuOpen}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-secondary"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
