import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: "Home", path: "#home" },
    { label: "About", path: "#about" },
    { label: "Team", path: "#team" },
    { label: "Product", path: "#product" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <div className="w-full text-white bg-green-600 fixed top-0 left-0 z-20">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            to="/"
            className="text-3xl font-bold tracking-widest uppercase focus:outline-none"
          >
            M o n i r a
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none"
            onClick={toggleMenu}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-col flex-grow md:flex md:justify-end md:flex-row ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="px-4 py-2 mt-2 text-sm font-semibold md:mt-0 md:ml-4 focus:outline-none transition hover:bg-green-700 rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
