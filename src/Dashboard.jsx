import { BarChart3, Brain, Grid3X3, Settings, TrendingUp, Users } from "lucide-react"
import { Edit2 } from "lucide-react"

const navigationItems = [
  { icon: Grid3X3, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Resume insights" },
  { icon: TrendingUp, label: "Courses" },
  { icon: BarChart3, label: "Progress" },
  { icon: Brain, label: "Personality test" },
  { icon: Users, label: "Communities" },
  { icon: Settings, label: "Settings" },
]

const skillsData = [
  { name: "Python", progress: 75 },
  { name: "Data analysis", progress: 85 },
  { name: "Statistics", progress: 65 },
  { name: "SQL", progress: 80 },
  { name: "Machine L.", progress: 45 },
]

const courses = [
  { title: "Machine learning", image: "/placeholder.svg?height=120&width=200" },
  { title: "Python for data science", image: "/placeholder.svg?height=120&width=200" },
  { title: "Data visualization", image: "/placeholder.svg?height=120&width=200" },
]

const skillsToLearn = [
  "Statistical analysis and evaluation",
  "Machine learning",
  "Model evaluation",
  "DevOps and CI/CD",
  "Cloud platforms",
  "Version control",
  "Communication",
  "Problem Solving",
]
export default function Dashboard() {
  return (
    <div className="flex">
       <div className="w-64 bg-slate-900 text-white min-h-screen p-4">
       <div className="mb-8">
        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
            <div className="flex items-center gap-2">
             <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </div>
          </div>
        
      </div>

      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              item.active ? "bg-amber-500 text-slate-900" : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>

    <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, Alex</h1>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Explore courses
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Path */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Path</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Career goal</span>
                  <Edit2 className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Machine Learning Engineer</h3>
              </div>
            </div>

            {/* Skills Progress */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Skills progress</h2>
              <div className="space-y-4">
                {skillsData.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-gray-700">{skill.name}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-slate-800 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Recommended Courses</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4"
                  >
                    <div className="w-24 h-16 bg-gray-200 rounded-lg"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{course.title}</h3>
                    </div>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Readiness */}
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Progress readiness</h2>
              <p className="text-gray-500 mb-4">Preparedness for the next role</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full w-2/3"></div>
                </div>
                <span className="text-2xl font-bold text-gray-800">65%</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills to Learn */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills to learn</h3>
              <ul className="space-y-2">
                {skillsToLearn.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI CV Assistant */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI CV Assistant</h3>
              <h4 className="font-medium text-gray-700 mb-2">Personalised Suggestion</h4>
              <p className="text-sm text-gray-600">Include relevant metrics to highlight achievements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}




