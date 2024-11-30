import { Link } from "react-router-dom";
import { Search, Sun, Moon, Menu } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm ">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center">
  <Link
    to="/"
    className="text-2xl font-bold text-gray-900 dark:text-white flex gap-1 items-center"
  >
    DOML
  </Link>
  {/* Desktop Links */}
  <div className="hidden md:flex items-center ml-[10px] space-x-4">
    {[
      "Product",
      "Team",
      "Enterprise",
      "Explore",
      "Marketplace",
      "Pricing",
    ].map((item) => (
      <Link
        key={item}
        to="/"
        className="text-[#171717] dark:text-[#F8F7F7] px-2 py-2 font-actor text-[15.56px]"
      >
        {item}
      </Link>
    ))}
  </div>
</div>


          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-[240px] h-[34px] flex items-center border rounded-md bg-gray-800">
              <input
                type="text"
                placeholder="Search DOML"
                className="flex-1 h-full text-sm text-[#A3A3A3] bg-transparent px-3 py-2 focus:outline-none placeholder:text-[#A3A3A3]"
              />
              <div className="px-2 text-gray-400">/</div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/signin"
              className="px-3 py-2 font-normal text-sm text-[#171717] dark:text-[#F8F7F7]"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 font-normal text-sm border rounded-md bg-gray-100 dark:bg-gray-900 text-[#171717] dark:text-white"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-white dark:bg-black rounded-lg shadow-lg p-4">
            {[
              "Product",
              "Team",
              "Enterprise",
              "Explore",
              "Marketplace",
              "Pricing",
            ].map((item) => (
              <Link
                key={item}
                to="/"
                className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {item}
              </Link>
            ))}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search DOML"
                className="w-full px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none"
              />
              <Search className="absolute right-3 top-2 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full mt-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/signin"
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mt-2"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="block bg-purple-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-purple-700 transition-colors text-center"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
