import { Link } from 'react-router-dom';

export default function QuestionPage3() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl text-center">
        {/* <div className="mb-8 flex justify-center">
          <PathwayLogo />
        </div> */}

        <h1 className="text-3xl font-bold text-gray-800 mb-8">What is your career goal?</h1>

        <form className="space-y-8">
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          />

          <div className="flex justify-end">
            <Link to = '/question4'
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Next
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
