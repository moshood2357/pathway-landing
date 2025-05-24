import { Link } from 'react-router-dom';

export default function QuestionPage2() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl text-center">
        {/* <div className="mb-8 flex justify-center">
          <PathwayLogo />
        </div> */}

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Do you have a career goal?</h1>

        <p className="text-gray-600 mb-16 max-w-md mx-auto">
          If no goal in mind, don't worry we will help you discover one. If you have, click next
        </p>

        <div className="flex justify-between items-center">
          <Link to = "/question4"
            type="button"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Skip
          </Link>
          <Link to = "/question3"
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}
