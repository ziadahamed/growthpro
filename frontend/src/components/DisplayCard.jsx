import { Star, MessageSquare, RefreshCw } from "lucide-react";

const DisplayCard = ({ data, onRegenerate, loading }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
    <h2 className="text-lg font-bold text-green-700 text-center">Business Data Retrieved</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
        <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
        <h3 className="font-semibold text-gray-700 mb-1">Google Rating</h3>
        <p className="text-2xl font-bold text-gray-900">{data.rating}</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
        <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-2" />
        <h3 className="font-semibold text-gray-700 mb-1">Number of Reviews</h3>
        <p className="text-2xl font-bold text-gray-900">{data.reviews}</p>
      </div>
    </div>
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Latest AI-generated SEO headline:</h3>
      <p className="italic text-gray-800">"{data.headline}"</p>
    </div>
    <button
      onClick={onRegenerate}
      disabled={loading}
      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
    >
      {loading ? "Regenerating..." : "Regenerate SEO Headline"}
    </button>
  </div>
);

export default DisplayCard;
