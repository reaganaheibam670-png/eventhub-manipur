import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BadgeCheck, MapPin } from "lucide-react";
import { categories, vendors } from "../data";

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = categories.find((c) => c.id === categorySlug);
  const categoryVendors = vendors.filter((v) => v.categoryId === categorySlug);

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-700 flex items-center font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name} in Manipur</h1>
          <p className="text-lg text-gray-600">Find the best {category.name.toLowerCase()} professionals for your special event.</p>
        </div>

        {categoryVendors.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg">No vendors found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categoryVendors.map(vendor => (
              <Link to={`/vendor/${vendor.id}`} key={vendor.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden shrink-0">
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
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                    <div className="flex items-center pt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-gray-900 ml-1">{vendor.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({vendor.reviews})</span>
                    </div>
                    {vendor.startingPrice && (
                       <span className="font-semibold text-gray-900 text-sm">{vendor.startingPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
