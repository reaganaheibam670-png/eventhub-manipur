import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-orange-600">EventHub<span className="text-gray-900 font-medium">Manipur</span></span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              The premier marketplace connecting people in Manipur with the best local event service providers and venues.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/photography" className="text-gray-600 hover:text-orange-600 text-sm">Photography</Link></li>
              <li><Link to="/catering" className="text-gray-600 hover:text-orange-600 text-sm">Catering</Link></li>
              <li><Link to="/venues" className="text-gray-600 hover:text-orange-600 text-sm">Venues</Link></li>
              <li><Link to="/decoration" className="text-gray-600 hover:text-orange-600 text-sm">Decorators</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">For Vendors</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">List your business</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">How it works</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Verification Process</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-600 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EventHub Manipur. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-gray-900">Facebook</a>
             <a href="#" className="hover:text-gray-900">Instagram</a>
             <a href="#" className="hover:text-gray-900">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
