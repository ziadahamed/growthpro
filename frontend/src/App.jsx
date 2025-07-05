import { useState } from "react";
import Header from "./components/Header";
import BusinessForm from "./components/BusinessForm";
import DisplayCard from "./components/DisplayCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!businessName || !location) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: businessName, location })
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching business data:", error);
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/regenerate-headline?name=${businessName}&location=${location}`);
      const result = await response.json();
      setData({ ...data, headline: result.headline });
    } catch (error) {
      console.error("Error regenerating headline:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <BusinessForm
          onSubmit={handleSubmit}
          businessName={businessName}
          setBusinessName={setBusinessName}
          location={location}
          setLocation={setLocation}
          loading={loading}
        />
        {loading && <LoadingSpinner />}
        {data && !loading && (
          <DisplayCard
            data={data}
            onRegenerate={regenerateHeadline}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default App;
