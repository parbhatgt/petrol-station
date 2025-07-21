import React, { useState, useRef, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Layout from '../layout/Layout';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

const VatBillForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    panNumber: ''
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const keyboardRef = useRef();

   const navigate=useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (keyboardRef.current && name === focusedInput) {
      keyboardRef.current.setInput(value);
    }
  };

  const handleKeyboardChange = (input) => {
    if (focusedInput) {
      setFormData(prev => ({
        ...prev,
        [focusedInput]: input
      }));
    }
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.keyboard-area') && !e.target.closest('input')) {
      setFocusedInput(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleCancel=()=>{
   navigate("/success-payment")
  }

  const handleSubmit=()=>{
    navigate("/success-payment")
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">VAT Bill Request</h1>
            <p className="text-gray-600 text-sm">Please provide your details</p>
          </div>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('name')}
                className="w-full px-4 py-3 border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* PAN Number Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Number *</label>
              <input
                type="number"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('panNumber')}
                className="w-full px-4 py-3 border-2 rounded-xl font-mono tracking-wider border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="23422"
              />
              <p className="mt-1 text-xs text-gray-500">Format: 5 letters + 4 digits + 1 letter</p>
            </div>

                <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-6 py-3 border bg-red-700 text-gray-700 rounded-xl"
                
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-[#0E4382] hover:bg-[#0C386E] text-white rounded-xl disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </form>

          {/* On-Screen Keyboard */}
          {focusedInput && (
            <div className="mt-6 keyboard-area">
              <Keyboard
                keyboardRef={r => (keyboardRef.current = r)}
                onChange={handleKeyboardChange}
                inputName={focusedInput}
                layoutName="default"
              />
            </div>
          )}
        </div>
      </div>
      <BackButton />
    </Layout>
  );
};

export default VatBillForm;
