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
        <div className="bg-gray-100 p-8 max-w-xxl w-full text-center mt-8 ">
          {/* Header Section */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-[#0E4382] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-700 tracking-wide">
              Order Confirmation
            </h1>
          </div>

          {/* Order Details Card */}
          <div className=" p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black text-green-600">
                    {liters}
                  </span>
                  <span className="text-2xl  font-bold text-gray-600 ml-2">
                    LITERS
                  </span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-800 bg-blue-100 px-4 py-2 rounded-full">
                    {fuelType}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-700">
                  Total Amount
                </span>
                <span className="text-3xl font-black text-green-600">
                  Rs. {rupees}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Gateway Section */}
          <div className="mb-6">
            

            <div className="flex gap-4">
              
              <button
                onClick={handleConfirm}
                className="flex-1 bg-gradient-to-r bg-[#0E4382] text-white font-bold py-4 px-6 rounded-xl text-lg tracking-wide shadow-lg transform  transition-all duration-300 active:scale-95 flex items-center justify-center "
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default ConfirmationUI;
