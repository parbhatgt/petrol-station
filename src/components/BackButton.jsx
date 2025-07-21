import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Goes back to previous page
  };
  return (
    <div className="flex items-center">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 px-4 py-2 font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
          viewBox="0 0 512 512"
        >
          <rect width="512" height="512" rx="90" ry="90" fill="#f3f4f6" />
          <circle cx="256" cy="256" r="160" fill="#0a75a8" />
          <path fill="#fff" d="M288 160l-96 96 96 96v-64h96v-64h-96v-64z" />
        </svg>
      </button>
    </div>
  );
};

export default BackButton;
