import { useRouteError,  useNavigate } from 'react-router-dom';

function Error() {
    const error = useRouteError();
    console.log('Error:', error); // Log the error details
  
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1); // Go back to the previous page
    };
  
    return (
      <div className="text-center p-4">
        <h1 className="text-xl font-bold text-red-600">Something went wrong 😢</h1>
        <p className="text-gray-700 mb-4">{error.statusText || "Unknown Error"}</p>
        <p className="text-sm text-gray-500">{error.data || error.message}</p>
        
        <button onClick={handleBack} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          &larr; Go back
        </button>
      </div>
    );
  }
  
  export default Error