import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PasswordResetOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    // Optionally: Validate OTP here or send to server

    // Navigate to dashboard (or wherever next)
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Now, you're good to go</h1>
        <p className="text-gray-600 mb-8">Enter the OTP sent to your email</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
