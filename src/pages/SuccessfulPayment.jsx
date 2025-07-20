import Layout from "../layout/Layout";

const SuccessfulPayment = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center bg-[#0E4382] min-h-screen p-4">
        <div className=" bg-gray-100 p-8 max-w-md w-full text-center">
          {/* Header Text */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 tracking-wider leading-tight">
            PLEASE COLLECT RECEIPT AND
            <br />
            PRESENT AT THE STATION
          </h1>

          {/* Liters Display */}
          <div className="mb-4">
            <span className="text-4xl font-bold text-green-500">THANK YOU</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessfulPayment;
