import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'

const AskForVatBill = () => {
    const navigate=useNavigate()
  return (
    <Layout>
<div className="min-h-screen flex justify-center bg-gray-100 py-10">
  <div className="bg-gray-100   p-6 max-w-md w-full text-center transform transition-all duration-300">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">
      DO YOU WANT VAT BILL?
    </h2>

    <div className="flex gap-4 justify-center">
      <button
    
        onClick={() => navigate("/vat-bill")}
        className="flex-1 bg-gradient-to-r bg-[#0E4382] hover:bg-[#0C386E] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <span className="text-lg">✓ YES</span>
      </button>

      <button
        onClick={() => navigate("/success-payment")}
        className="flex-1 bg-red-700 hover:bg-red-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        <span className="text-lg">✗ NO</span>
      </button>
    </div>

    {/* <p className="text-xs text-gray-500 mt-4">
      VAT bill will be sent to your registered email
    </p> */}
  </div>
</div>


    </Layout>
  )
}

export default AskForVatBill