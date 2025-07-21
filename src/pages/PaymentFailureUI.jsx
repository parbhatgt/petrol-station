

import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const PaymentFailureUI = ({
}) => {
 
   const navigate=useNavigate()
  const onCancel=()=>{
   navigate("/")
  }
  return (
    <Layout>
      <div className="flex  items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-gray-100 p-8 max-w-md w-full">
          {/* Payment Status Message */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-black tracking-widest leading-relaxed">
              PAYMENT NOT SUCCESSFUL
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {/* <button
              onClick={onRetry}
              className="bg-[#0E4382] hover:bg-[#0C386E] text-white font-bold py-4 px-8 rounded-2xl text-xl tracking-widest shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              RETRY
            </button> */}

            <button
              onClick={onCancel}
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-2xl text-xl tracking-widest shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentFailureUI;
