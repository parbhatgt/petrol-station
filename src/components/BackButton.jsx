import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Goes back to previous page
  };
  return (
    <div className="flex items-center bg-gray-100">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 px-4 py-2 text-[#0E4382] hover:text-red-700 transition-colors duration-300 font-semibold"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Back | फिर्ता</span>
      </button>
    </div>
  );
};

export default BackButton;
