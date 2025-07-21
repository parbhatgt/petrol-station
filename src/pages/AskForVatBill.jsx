import BackButton from '../components/BackButton'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'

const AskForVatBill = () => {
    const navigate=useNavigate()
  return (
    <Layout>
<div className="min-h-screen flex justify-center bg-gray-100 py-10">
  <div className="bg-gray-100   p-6 max-w-xxl  w-full text-center transform transition-all duration-300">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      DO YOU WANT VAT BILL?
    </h2>

    <div className="flex gap-4 justify-center">
      <button
    
        onClick={() => navigate("/vat-bill")}
        className="flex-1  bg-[#0E4382]  text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform  focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <span className="text-lg">✓ YES</span>
      </button>

      <button
        onClick={() => navigate("/success-payment")}
        className="flex-1 bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform  focus:outline-none focus:ring-4 focus:ring-gray-300"
      >
        <span className="text-lg">✗ NO</span>
      </button>
    </div>

    {/* <p className="text-xs text-gray-500 mt-4">
      VAT bill will be sent to your registered email
    </p> */}
  </div>
</div>

<BackButton/>

    </Layout>
  )
}

export default AskForVatBill