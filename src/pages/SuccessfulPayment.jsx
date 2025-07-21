import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Layout from "../layout/Layout";

const SuccessfulPayment = () => {
  const navigate=useNavigate()
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br bg-gray-100 min-h-screen p-4">
        {/* Main Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center mb-8 transform transition-all duration-300 hover:scale-105">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Header Text */}
          <h1 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
            PLEASE COLLECT RECEIPT AND
            <br />
            <span className="text-[#0E4382]">PRESENT AT THE STATION</span>
          </h1>

          {/* Thank You Message */}
          <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              THANK YOU
            </span>
          </div>

          {/* Decorative Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>
          
          {/* Receipt Instructions */}
          <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-200">
            📧 Your receipt has been processed successfully
          </p>
        </div>

        {/* VAT Bill Section */}
        

        {/* Back Button Container */}
        {/* <div className="mt-8">
          <BackButton />
        </div> */}
      </div>
    </Layout>
  );
};

export default SuccessfulPayment;