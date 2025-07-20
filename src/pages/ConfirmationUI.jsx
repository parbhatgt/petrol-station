import React from "react";
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
      <div className="flex flex-col items-center bg-[#0E4382] min-h-screen p-4">
        <div className=" bg-gray-100 p-8 max-w-md w-full text-center">
          {/* Header Text */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-wider leading-tight">
            YOU HAVE SELECTED
          </h1>

          {/* Liters Display */}
          <div className="mb-4">
            <span className="text-4xl font-bold text-green-500">{liters}</span>
            <span className="text-2xl font-bold text-gray-800 ml-2">
              LITERS of
            </span>
          </div>

          {/* Fuel Type */}
          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-800">{fuelType}</span>
          </div>

          {/* Total Amount */}
          <div className="mb-8">
            <span className="text-xl font-bold text-gray-800">TOTAL Rs.</span>
            <span className="text-2xl font-bold text-green-500 ml-2">
              {rupees}
            </span>
          </div>

          {/* Confirm Button */}
          <div className="space-y-4">
            <button
              onClick={handleConfirm}
              className="w-full bg-[#0E4382]  text-white font-bold py-4 px-8 rounded-2xl text-2xl tracking-widest shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default ConfirmationUI;
