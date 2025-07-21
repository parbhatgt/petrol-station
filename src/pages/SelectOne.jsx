import Carousel from "../components/Carousel";
import Layout from "../layout/Layout";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const SelectOne = () => {
  const navigate = useNavigate();
  const handlePetrolClick = () => {
    navigate("/quantity", {
      state: { pricePerLiter: 180, fuelType: "PETROL" },
    });
  };

  const handleDieselClick = () => {
    navigate("/quantity", {
      state: { pricePerLiter: 150, fuelType: "DIESEL" },
    });
  };

  return (
    <Layout>
      <Carousel />

      {/* service section */}
      <div className="text-center mb-8 mt-4">
        <span className="text-2xl font-bold text-[#0E4382]">
           SELECT ONE |  एक छान्नुहोस्
        </span>
      </div>

      {/* Fuel Type Selection Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={handlePetrolClick}
          className="bg-red-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">P</span>
          </div>
          <span className="text-lg">PETROL | पेट्रोल</span>
        </button>

        <button
          onClick={handleDieselClick}
          className="bg-[#0E4382]  text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-sm">D</span>
          </div>
          <span className="text-lg">DIESEL | डिजेल</span>
        </button>
      </div>
    

      {/* Back Button */}
      {/* <BackButton /> */}
    </Layout>
  );
};

export default SelectOne;
