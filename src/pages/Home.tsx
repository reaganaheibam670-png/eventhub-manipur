import { Link } from "react-router-dom";
import { BadgeCheck, Camera, Video, Utensils, Sparkles, Car, Brush, MapPin, Search } from "lucide-react";
import { categories, vendors } from "../data";

// Helper to render icons dynamically
const renderIcon = (iconName: string) => {
  const icons: any = {
    Camera: <Camera className="w-6 h-6" />,
    Video: <Video className="w-6 h-6" />,
    Utensils: <Utensils className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Car: <Car className="w-6 h-6" />,
    Brush: <Brush className="w-6 h-6" />,
    MapPin: <MapPin className="w-6 h-6" />,
  };
  return icons[iconName] || <Sparkles className="w-6 h-6" />;
};

export default function Home() {
  const featuredVendors = vendors.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-white opacity-90"></div>
          <svg className="absolute right-0 top-0 h-full w-1/2 transform translate-x-1/3 text-white opacity-50" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
             <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 pl-1 pr-3 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6 flex items-center w-fit">
              <span className="bg-orange-500 text-white rounded-full px-2 py-0.5 mr-2 text-xs">New</span>
              The #1 Event Marketplace in Manipur
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Plan Your <span className="text-orange-600">Perfect Event</span><br/> in One Place
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Find verified photographers, caterers, decorators, venues and more across Manipur. Connect with the best local talent for your special day.
            </p>
            <div className="bg-white p-2 sm:p-3 max-w-2xl rounded-2xl shadow-xl shadow-orange-900/10 border border-gray-100 flex flex-col sm:flex-row items-center gap-2 mb-4">
              <div className="flex-1 flex items-center px-4 w-full">
                <Search className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search for photographers, venues, caterers..." 
                  className="w-full bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 py-3 md:py-4 text-base md:text-lg focus:ring-0"
                />
              </div>
              <button className="w-full sm:w-auto bg-orange-600 text-white px-8 py-3 md:py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition flex items-center justify-center whitespace-nowrap">
                Find Vendors
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 items-center text-sm font-medium text-gray-600">
              <span className="mr-1 hidden sm:inline-block text-gray-500 font-normal">Popular:</span>
              <Link to="/photography" className="bg-white px-4 py-1.5 rounded-full border border-gray-200 hover:border-orange-300 hover:text-orange-600 transition shadow-sm">Wedding Photography</Link>
              <Link to="/makeup-artists" className="bg-white px-4 py-1.5 rounded-full border border-gray-200 hover:border-orange-300 hover:text-orange-600 transition shadow-sm">Makeup Artist</Link>
              <Link to="/catering" className="bg-white px-4 py-1.5 rounded-full border border-gray-200 hover:border-orange-300 hover:text-orange-600 transition shadow-sm">Catering Services</Link>
            </div>
            
            <div className="mt-10 flex items-center text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="user" className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-gray-800">500+</span> families in Manipur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Find the specific service you need for your upcoming celebration, from intimate weddings to grand corporate events.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to={`/${category.id}`} key={category.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition cursor-pointer group flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(category.iconName)}
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </Link>
            ))}
            
            {/* View All Card */}
            <div className="bg-orange-600 rounded-2xl p-6 shadow-sm border border-orange-600 hover:bg-orange-700 transition cursor-pointer flex flex-col items-center justify-center text-center">
              <h3 className="font-bold text-white text-lg">View All<br/>Services</h3>
              <div className="mt-2 text-orange-200">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vendors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Vendors</h2>
              <p className="text-gray-600 max-w-2xl text-lg">Top-rated professionals with verified badges you can trust.</p>
            </div>
            <Link to="/photography" className="hidden md:flex text-orange-600 font-medium hover:text-orange-700 items-center">
              See all vendors <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVendors.map(vendor => (
              <Link to={`/vendor/${vendor.id}`} key={vendor.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-gray-800 shadow-sm">
                    {vendor.categoryName}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">
                        {vendor.name}
                      </h3>
                      {vendor.verified && (
                        <div className="flex flex-col items-center shrink-0 ml-2" title="Verified Business">
                          <BadgeCheck className="w-5 h-5 text-blue-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400 shrink-0" />
                      <span className="truncate">{vendor.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center pt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-gray-900 ml-1">{vendor.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({vendor.reviews})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium w-full">
              View All Vendors
            </button>
          </div>
        </div>
      </section>

      {/* Verification Value Prop Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
               <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6 w-fit">
                 <BadgeCheck className="w-8 h-8 text-blue-600" />
               </div>
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Trust is our Priority.</h2>
               <p className="text-lg text-gray-600 mb-6">
                 We established a rigorous <strong>vendor verification process</strong> to ensure your events are handled by legitimate professionals.
               </p>
               <ul className="space-y-3 mb-8">
                 <li className="flex items-start">
                   <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   <span className="text-gray-700">Business registration checks</span>
                 </li>
                 <li className="flex items-start">
                   <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   <span className="text-gray-700">Reference collections from past clients</span>
                 </li>
                 <li className="flex items-start">
                   <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   <span className="text-gray-700">Brief vendor interviews</span>
                 </li>
               </ul>
               <p className="text-gray-700 font-medium pb-2 border-b border-gray-100 w-fit">
                 Look for the "Verified" badge on vendor profiles.
               </p>
            </div>
            <div className="md:w-1/2 bg-gray-100">
               <img src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=1000&h=800" alt="Event planning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Vendor CTA */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange-600 blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Are you an event professional?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join EventHub Manipur and connect with thousands of local clients planning their weddings, birthdays, and corporate events. Get verified and stand out.
          </p>
          <button className="bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-500 transition shadow-xl shadow-orange-600/30">
            List Your Business Today
          </button>
        </div>
      </section>
    </div>
  );
}
