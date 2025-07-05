const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-6">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600"></div>
    <p className="ml-2 text-blue-600 font-medium">Loading...</p>
  </div>
);

export default LoadingSpinner;
