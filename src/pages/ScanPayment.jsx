import QRCode from "react-qr-code";
import Layout from "../layout/Layout";
import BackButton from "../components/BackButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ScanPayment = ({
  name = "Parbhat Dhanuk",
  accountNo = 365654687899990,
}) => {
  const location = useLocation();
  const { rupees } = location.state || 0;
  const navigate = useNavigate();
  const handleErrorClick = () => {
    navigate("/unsuccess-payment");
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-xxl bg-gray-100 space-y-6 relative">
        {/* Error Button in Top Right Corner */}
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={handleErrorClick}
            className="bg-red-700 py-4 px-8  text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
          >
            Error
          </button>

          {/* Note below Error Button */}
          <div className="bg-yellow-50 border border-yellow-300 p-2 rounded-md mt-2 max-w-48">
            <p className="text-xs text-gray-700">
              <span className="font-semibold text-yellow-700">Note:</span> If
              payment error occurs, to visualize that page click this button.
            </p>
          </div>
        </div>

        {/* Amount text */}
        <div className="text-green-600 text-4xl font-bold tracking-wider">
          Rs. {rupees}
        </div>

        {/* QR Code */}
        <Link to="/ask-vat">
          <div className="bg-white p-4 shadow-md rounded-md">
            <QRCode value={JSON.stringify({ name, accountNo })} size={250} />
          </div>
        </Link>

        {/* Scan and Pay text */}
        <div className="text-4xl text-[#0E4382] font-bold tracking-widest drop-shadow-md">
          SCAN AND PAY
        </div>
      </div>

      <BackButton />
    </Layout>
  );
};

export default ScanPayment;
