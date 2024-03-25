import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-default-orange py-4 mb-10 rounded">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold"><h2>Food Planner</h2></Link>
        <div className="hidden md:block">
          <Link to="/" className="text-white hover:text-hover-orange ml-4">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-hover-orange ml-4">
            About
          </Link>
          <Link to="/recipes" className="text-white hover:text-hover-orange ml-4">
            Recipes
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-hover-orange"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Hamburger Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link to="/" className="text-white hover:text-hover-orange py-2">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-hover-orange py-2">
              About
            </Link>
            <Link to="/recipes" className="text-white hover:text-hover-orange py-2">
              Recipes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
