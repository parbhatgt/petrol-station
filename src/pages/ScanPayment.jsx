import QRCode from "react-qr-code";
import Layout from "../layout/Layout";
import BackButton from "../components/BackButton";
import { Link, useLocation } from "react-router-dom";

const ScanPayment = ({
  name="Parbhat Dhanuk",
  accountNo = 365654687899990,
}) => {
  const location = useLocation();
  const { rupees } = location.state || 0;
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
        {/* Amount text */}
        <div className="text-green-600 text-3xl font-semibold tracking-wider">
          Rs. {rupees}
        </div>

        {/* QR Code */}
        <Link to='/ask-vat'>
        <div className="bg-white p-4 shadow-md rounded-md">
         <QRCode value={JSON.stringify({ name, accountNo })} size={250} /> 
        </div>
         </Link> 
        {/* Scan and Pay text */}
        <div className="text-xl text-violet-600 font-bold tracking-widest drop-shadow-md">
          SCAN AND PAY
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default ScanPayment;
