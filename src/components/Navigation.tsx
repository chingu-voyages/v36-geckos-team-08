import * as React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks';

export const Navigation = () => {
  const { cart }: any = useCart();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const isHidden = isOpen ? null : 'hidden';

  const hasItems: boolean = cart?.total_unique_items > 0;

  return (
    <nav className="bg-white shadow">
      <div className="px-6 py-4 mx-auto max-w-6xl md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-black transition-colors duration-200 transform  lg:text-3xl hover:text-gray-600 "
            >
              Coffee Shop
            </Link>
          </div>

          {/* Button to open menu on mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
              onClick={handleClick}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Hidden : boolean value to display menu button on mobile */}
        <div className={`${isHidden} items-center md:flex`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link
              to="/"
              className="my-1 text-sm font-medium transition-colors duration-200 transform text-black hover:text-gray-300 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="my-1 text-sm font-medium transition-colors duration-200 transform text-black hover:text-gray-300 md:mx-4 md:my-0"
            >
              Shop
            </Link>
          </div>

          <div className="flex justify-center md:block">
            <Link
              to="/cart"
              className="relative transition-colors duration-200 transform text-black hover:text-gray-600 hover:text-gray-300"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {hasItems && (
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
