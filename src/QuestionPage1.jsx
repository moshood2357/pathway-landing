
import { Link } from 'react-router-dom';

export default function QuestionPage1() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl text-center">
        <div className="flex items-center gap-2 mb-4">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">What is your current role?</h1>

        <p className="text-gray-500 mb-8">If no current role, click skip</p>

        <form className="space-y-8">
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          />

          <div className="flex justify-between">
            <Link
              to="/question2"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Skip
            </Link>
            <Link
              to="/question2"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
