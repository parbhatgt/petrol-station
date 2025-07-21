import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const SuccessfulPayment = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br bg-gray-100 min-h-screen p-4">
        {/* Main Success Card */}
        <div className="bg-gray-100 p-8 max-w-xxl w-full text-center mb-8 ">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Header Text */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-relaxed">
            PLEASE COLLECT RECEIPT AND
            <br />
            <span className="text-gray-800">PRESENT AT THE STATION</span>
          </h1>

          {/* Thank You Message */}
          <div className="mb-6 p-4">
            <span className="text-6xl font-bold text-green-500">
              THANK YOU
            </span>
          </div>

          {/* Decorative Line */}
          

         <h2 className="text-2xl font-bold text-gray-800 mb-2">
          WHAT DID YOU THINK OF OUR SERVICE?
        </h2>
        <p className="text-2xl text-gray-600">
          तपाईंलाई हाम्रो सेवा कस्तो लाग्यो?
        </p>
          
        
        </div>

       <div className="text-4xl font-bold">
        ⭐️ Excellent
        👍 Good
        😐 Average
        👎 Poor
       </div>
      </div>
    </Layout>
  );
};

export default SuccessfulPayment;