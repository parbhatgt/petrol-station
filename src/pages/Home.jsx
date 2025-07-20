import Layout from "../layout/Layout";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/selectone");
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Welcome Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-red-700 ">
            Welcome to Petrol Station Services
          </h2>
          <p className="text-2xl text-[#0E4382] ">पेट्रोल पम्प सेवामा स्वागत छ</p>
        </div>

        {/* Promotional Banner */}
        <Carousel />

        {/* Services Section */}
        <div className="text-center mb-8 mt-4">
          <span className="text-2xl font-bold  text-red-700">OUR SERVICES</span>
          <div className="flex flex-wrap justify-center gap-2 text-[#0E4382] font-medium mt-1">
            <span>Account Statement</span>
            <span className="text-gray-400">•</span>
            <span>Balance Certificate</span>
            <span className="text-gray-400">•</span>
            <span>Old To New Account</span>
            <span className="text-gray-400">•</span>
            <span>Card Request</span>
            <span className="text-gray-400">•</span>
            <span>Balance Inquiry</span>
          </div>

          <div className="mt-4 text-[#0E4382]">
            <p>
              हाम्रा सेवाहरू : खाताको विवरण, ब्यालेन्स प्रमाणपत्र, नयाँ खाता न.,
              कार्ड अनुरोध, ब्यालेन्स सोधपुछ
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="text-center ">
          <button
            onClick={handleGetStarted}
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started (अगाडि बढ्नुहोस्)
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
