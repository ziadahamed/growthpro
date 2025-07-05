import { Building2 } from "lucide-react";

const Header = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-4">
      <Building2 className="w-8 h-8 text-blue-600" />
      <h1 className="text-3xl font-bold text-gray-900">
        Mini Local Business Dashboard
      </h1>
    </div>
    <p className="text-gray-600">
      Discover SEO content and Google Business data for local businesses
    </p>
  </div>
);

export default Header;
