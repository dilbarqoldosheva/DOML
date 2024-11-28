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
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              DOML
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Product
            </Link>
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Team
            </Link>
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Enterprise
            </Link>
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Explore
            </Link>
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Marketplace
            </Link>
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Pricing
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search DOML"
                className="w-64 px-4 py-1 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-1.5 w-4 h-4 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/signin" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
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
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Product
            </Link>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Team
            </Link>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Enterprise
            </Link>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Explore
            </Link>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Marketplace
            </Link>
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </Link>
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search DOML"
                className="w-full px-4 py-1 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-1.5 w-4 h-4 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full mt-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/signin" className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mt-2">
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
