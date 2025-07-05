import { useState } from "react";
import { Search, MapPin, Building2 } from "lucide-react";

const BusinessForm = ({ onSubmit, businessName, setBusinessName, location, setLocation, loading }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <Search className="w-5 h-5" /> Business Information
    </h2>
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Business Name</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full border rounded-lg pl-10 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter business name"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg pl-10 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter location"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {loading ? "Searching..." : "Get Business Data"}
      </button>
    </form>
  </div>
);

export default BusinessForm;
