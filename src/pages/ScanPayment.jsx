import React from "react";
import QRCode from "react-qr-code";
import Layout from "../layout/Layout";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";

const ScanPayment = ({
  amount = 2550.75,
  qrValue = "upi://pay?pa=merchant@upi&am=2550.75",
}) => {
  const location = useLocation();
  const { rupees } = location.state || 0;
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0E4382] space-y-6">
        {/* Amount text */}
        <div className="text-green-600 text-3xl font-semibold tracking-wider">
          Rs. {rupees}
        </div>

        {/* QR Code */}
        <div className="bg-white p-4 shadow-md rounded-md">
          <QRCode value={qrValue} size={250} />
        </div>

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
