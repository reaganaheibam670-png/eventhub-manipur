import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BadgeCheck, MapPin, Star, MessageSquare } from "lucide-react";
import { vendors } from "../data";

export default function VendorProfile() {
  const { vendorSlug } = useParams<{ vendorSlug: string }>();
  
  const vendor = vendors.find((v) => v.id === vendorSlug);

  if (!vendor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vendor Not Found</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-700 flex items-center font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Vendor Header Image */}
      <div className="w-full h-64 md:h-96 relative">
        <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        <div className="absolute top-6 left-6 z-10">
           <Link to={`/${vendor.categoryId}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
           </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center mb-3">
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                  {vendor.categoryName}
                </span>
                {vendor.verified && (
                  <span className="ml-3 flex items-center text-blue-300 text-sm font-medium">
                    <BadgeCheck className="w-4 h-4 mr-1 text-blue-400" /> Verified
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{vendor.name}</h1>
              <div className="flex flex-wrap items-center text-gray-200 text-sm md:text-base gap-4">
                 <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-1" />
                    {vendor.location}
                 </div>
                 <div className="flex items-center">
                    <Star className="w-5 h-5 mr-1 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-white mr-1">{vendor.rating}</span> 
                    ({vendor.reviews} reviews)
                 </div>
              </div>
            </div>
            <button className="bg-white text-gray-900 px-6 py-3.5 rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center whitespace-nowrap">
               <MessageSquare className="w-5 h-5 mr-2" />
               Contact Vendor
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {vendor.name}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {vendor.description || "A professional event service provider based in Manipur."}
              </p>
            </div>

            {/* Services */}
            {vendor.services && vendor.services.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Offered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vendor.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <BadgeCheck className="w-6 h-6 text-orange-500 mr-3 shrink-0" />
                      <span className="text-gray-800 font-medium text-lg">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing</h3>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm uppercase tracking-wide">Starting from</span>
                <span className="text-3xl font-bold text-gray-900 mt-1">{vendor.startingPrice || "Contact for pricing"}</span>
              </div>
              <button className="w-full bg-orange-600 text-white mt-6 px-4 py-3 rounded-xl font-bold hover:bg-orange-700 transition">
                Request a Quote
              </button>
            </div>
            
            {/* Business Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Info</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium text-gray-900">{vendor.location}</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-500">Member Since</span>
                  <span className="font-medium text-gray-900">2023</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-500">Response Time</span>
                  <span className="font-medium text-gray-900">Within 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
