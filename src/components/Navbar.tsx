import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
                EventHub
              </span>
              <span className="text-2xl font-medium text-gray-800 ml-1">
                Manipur
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium">Browse</Link>
            <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium">Vendors</Link>
            <Link to="/" className="text-gray-600 hover:text-orange-600 font-medium">About</Link>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition">
              List Your Business
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
