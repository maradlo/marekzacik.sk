import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed top-0 w-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-2xl text-gray-400">Marek</span>
            <span className="font-semibold text-2xl text-white">Žáčik</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
            <li>
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="work-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </Link>
          </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" ref={ref}>
            <ul className="bg-gray-900 mt-2 py-4 px-4">
              <li>
                <Link
                  to="home-section"
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                Home
              </Link>
              </li>
              <li>
                <Link
                  to="about-section"
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                About
              </Link>
              </li>
              <li>
                <Link
                  to="work-section"
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                Work
              </Link>
              </li>
              <li>
                <Link
                  to="contact-section"
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                Contact
              </Link>
              </li>
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
