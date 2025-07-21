import React, { useState } from "react";
import Layout from "../layout/Layout";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const QuantityEntryUI = () => {
  const [liters, setLiters] = useState("0");
  const [rupees, setRupees] = useState("0");
  const [activeInput, setActiveInput] = useState("liters"); // 'liters' or 'rupees'
  const navigate = useNavigate();
  const location = useLocation();
  const { pricePerLiter, fuelType } = location.state || 0; // fallback if undefined

  const handleNumberClick = (num) => {
    if (activeInput === "liters") {
      updateLiters(num);
    } else {
      updateRupees(num);
    }
  };

  const updateLiters = (num) => {
    let currentValue = liters;
    if (currentValue === "0") {
      currentValue = num;
    } else {
      currentValue += num;
    }

    setLiters(currentValue);

    // Auto-calculate rupees
    const literValue = parseFloat(currentValue);
    const rupeesValue = literValue * pricePerLiter;
    setRupees(rupeesValue.toFixed(2));
  };

  const updateRupees = (num) => {
    let currentValue = rupees;
    if (currentValue === "0") {
      currentValue = num;
    } else {
      currentValue += num;
    }

    setRupees(currentValue);

    // Auto-calculate liters
    const rupeesValue = parseFloat(currentValue);
    const literValue = rupeesValue / pricePerLiter;
    setLiters(literValue.toFixed(2));
  };

  const handleBackspace = () => {
    if (activeInput === "liters") {
      let currentValue = liters;
      currentValue = currentValue.slice(0, -1);
      if (currentValue.length === 0) currentValue = "0";
      setLiters(currentValue);

      // Auto-calculate rupees
      const literValue = parseFloat(currentValue);
      const rupeesValue = literValue * pricePerLiter;
      setRupees(rupeesValue.toFixed(2));
    } else {
      let currentValue = rupees;
      currentValue = currentValue.slice(0, -1);
      if (currentValue.length === 0) currentValue = "0";
      setRupees(currentValue);

      // Auto-calculate liters
      const rupeesValue = parseFloat(currentValue);
      const literValue = rupeesValue / pricePerLiter;
      setLiters(literValue.toFixed(2));
    }
  };

  const handleClear = () => {
    setLiters("0");
    setRupees("0");
  };

  const handleQuantityEntry = () => {
    navigate("/confirm", {
      state: { liters, rupees, fuelType },
    });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-gray-100 p-8 max-w-xxl w-full">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8 tracking-wider">
            ENTER QUANTITY
          </h2>

          {/* Display Section */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <div
              className={`text-4xl font-bold cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                activeInput === "liters"
                  ? "text-blue-500 bg-blue-100"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveInput("liters")}
            >
              {liters}
            </div>

            <div className="text-4xl font-bold text-gray-300 mx-2">|</div>

            <div
              className={`text-4xl font-bold cursor-pointer p-4 rounded-lg  ${
                activeInput === "rupees"
                  ? "text-blue-500 bg-blue-100 "
                  : "text-gray-400"
              }`}
              onClick={() => setActiveInput("rupees")}
            >
              {rupees}
            </div>
          </div>

          {/* Unit Labels */}
          <div className="flex justify-between mb-8 px-4">
            <button
              onClick={() => setActiveInput("liters")}
              className={`px-6 py-2 rounded-full font-bold transition-all bg-yellow-400  ${
                activeInput === "liters"
                  ? "bg-gray-700"
                  : ""
              }`}
            >
              in Liters
            </button>

            <button
              onClick={() => setActiveInput("rupees")}
              className={` py-3 px-6  rounded-full font-bold transition-all bg-yellow-400  ${
                activeInput === "rupees"
                  ? "bg-gray-700"
                  : ""
              }`}
            >
              in Rs.
            </button>
          </div>

          {/* Keypad */}
          <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-10 mb-6 mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="w-14 h-14 bg-gray-700 text-white text-xl font-bold rounded-full  duration-150 transform shadow-lg"
              >
                {num}
              </button>
            ))}

            {/* Bottom row: ., 0, ← */}
            <button
              onClick={handleClear}
              className="w-14 h-14 bg-gray-700 text-white text-xl font-bold rounded-full transition-all duration-150 transform  shadow-lg"
            >
              C
            </button>

            <button
              onClick={() => handleNumberClick("0")}
              className="w-14 h-14 bg-gray-700 text-white text-xl font-bold rounded-full  transition-all duration-150 transform shadow-lg"
            >
              0
            </button>

            <button
              onClick={handleBackspace}
              className="w-14 h-14 bg-gray-700 text-white text-xl font-bold rounded-full transition-all duration-150 transform  shadow-lg flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                />
              </svg>
            </button>
          </div>
          </div>

          {/* Rate Display */}
          <div className="text-center text-2xl font-bold text-red-600 mb-4">
            Rate: Rs.{pricePerLiter} per liter
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleClear}
              className="flex-1 bg-red-700  text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Clear
            </button>
            <button
              onClick={handleQuantityEntry}
              className="flex-1 bg-[#0E4382]  text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Process
            </button>
          </div>
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default QuantityEntryUI;
