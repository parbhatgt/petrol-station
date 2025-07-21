import Layout from "../layout/Layout";
import BackButton from "../components/BackButton";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationUI = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rupees, liters, fuelType } = location.state || 0;

  const handleConfirm = () => {
    navigate("/scan-payment", {
      state: { rupees },
    });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center bg-gradient-to-br bg-gray-100 min-h-screen p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center mt-8 border border-white/20">
          {/* Header Section */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-700 tracking-wide">
              Order Confirmation
            </h1>
          </div>

          {/* Order Details Card */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 border-l-4 border-green-500 shadow-inner">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black text-green-600">{liters}</span>
                  <span className="text-lg font-semibold text-gray-600 ml-2">LITERS</span>
                </div>
                <div className="mb-4">
                  <span className="text-xl font-bold text-gray-800 bg-blue-100 px-4 py-2 rounded-full">
                    {fuelType}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Total Amount</span>
                <span className="text-2xl font-black text-green-600">Rs. {rupees}</span>
              </div>
            </div>
          </div>

          {/* Payment Gateway Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-6 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
              Choose Payment Method
            </h2>
            
            <div className="flex gap-4"> {/* gap-4 for spacing between buttons */}
  {/* eSewa Button */}
  <button
    onClick={handleConfirm}
    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl text-lg tracking-wide shadow-lg transform hover:scale-[1.02] transition-all duration-300 active:scale-95 flex items-center justify-center border border-green-500"
  >
    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
    </svg>
    eSewa
  </button>

  {/* Khalti Button */}
  <button
    onClick={handleConfirm}
    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl text-lg tracking-wide shadow-lg transform hover:scale-[1.02] transition-all duration-300 active:scale-95 flex items-center justify-center border border-purple-500"
  >
    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
    </svg>
    Khalti
  </button>
</div>



          </div>

          {/* Security Notice */}
          <div className="flex items-center justify-center text-sm text-gray-500 mt-6">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Secure Payment Processing
          </div>
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default ConfirmationUI;