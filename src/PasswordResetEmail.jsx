//import { PathwayLogo } from "./pathway-logo"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function PasswordResetEmail() {
     const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    // Normally you would validate the email or send a request here
    navigate('/otp');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-md text-center">
        

        <h1 className="text-3xl font-bold text-gray-800 mb-4">We have got you covered</h1>

        <p className="text-gray-600 mb-8">Enter your email address</p>

        <form className="space-y-6"  onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all mb-6" 
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
  )
}