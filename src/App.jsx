import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SelectOne from "./pages/SelectOne";
import QuantityEntryUI from "./pages/QuantityEntryUI";
import ConfirmationUI from "./pages/ConfirmationUI";
import ScanPayment from "./pages/ScanPayment";
import SuccessfulPayment from "./pages/SuccessfulPayment";
import PaymentFailureUI from "./pages/PaymentFailureUI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selectone" element={<SelectOne />} />
      <Route path="/quantity" element={<QuantityEntryUI />} />
      <Route path="/confirm" element={<ConfirmationUI />} />
      <Route path="/scan-payment" element={<ScanPayment />} />
      <Route path="/success-payment" element={<SuccessfulPayment />} />
      <Route path="/unsuccess-payment" element={<PaymentFailureUI />} />
    </Routes>
  );
};

export default App;
