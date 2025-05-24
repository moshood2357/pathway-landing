import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function QuestionPage4() {
  const [selectedStrengths, setSelectedStrengths] = useState([]);

  const strengths = [
    "Leadership",
    "Python",
    "Machine learning",
    "Project management",
    "Communication",
    "Java",
    "Data analysis",
    "Problem solving",
    "Interpersonal relationship",
    "Writing",
    "Reading",
    "Others",
  ];

  const toggleStrength = (strength) => {
    setSelectedStrengths((prev) =>
      prev.includes(strength)
        ? prev.filter((s) => s !== strength)
        : [...prev, strength]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl text-center">
        {/* <div className="mb-8 flex justify-center">
          <PathwayLogo />
        </div> */}

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          What are your career strengths?
        </h1>

        <p className="text-gray-500 mb-8">
          Unsure of your strengths? You are free to skip.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {strengths.map((strength) => (
            <button
              key={strength}
              onClick={() => toggleStrength(strength)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedStrengths.includes(strength)
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {strength}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <Link to = "/dashboard"
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}
