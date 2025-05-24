import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Link } from 'react-router-dom';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-900 p-4">
        <Link to = '/' className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign in to your account</h1>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="text-right">
              <Link to="/forgot" className="text-slate-800 hover:underline text-sm">
                    Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            {"Don't have an account?"}{" "}
            <Link to = "/signup" className="text-slate-800 font-medium hover:underline">
                  Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
   