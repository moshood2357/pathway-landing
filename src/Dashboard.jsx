import { useEffect, useState } from "react";
import {
  BarChart3,
  Brain,
  Grid3X3,
  Menu,
  Settings,
  TrendingUp,
  Users,
  Edit2,
} from "lucide-react";
import { Link } from "react-router-dom";

const navigationItems = [
  { icon: Grid3X3, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Resume insights" },
  { icon: TrendingUp, label: "Courses" },
  { icon: BarChart3, label: "Progress" },
  { icon: Brain, label: "Personality test" },
  { icon: Users, label: "Communities" },
  { icon: Settings, label: "Settings" },
];

const defaultSkillsData = [
  { name: "Python", progress: 0 },
  { name: "Data analysis", progress: 0 },
  { name: "Statistics", progress: 0 },
  { name: "SQL", progress: 0 },
  { name: "Machine L.", progress: 0 },
];

const courses = [
  { title: "Machine learning", image: "/placeholder.svg?height=120&width=200" },
  { title: "Python for data science", image: "/placeholder.svg?height=120&width=200" },
  { title: "Data visualization", image: "/placeholder.svg?height=120&width=200" },
];

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [careerGoal, setCareerGoal] = useState("Machine Learning Engineer");
  const [editedGoal, setEditedGoal] = useState(careerGoal);
  const [skillsToLearn, setSkillsToLearn] = useState([
    "Statistical analysis and evaluation",
    "Machine learning",
    "Model evaluation",
    "DevOps and CI/CD",
    "Cloud platforms",
    "Version control",
    "Communication",
    "Problem Solving",
  ]);
  const [skillsData] = useState(defaultSkillsData);
  const [readiness] = useState(0); // readiness is static for now

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addSkill = (newSkill) => {
    if (!skillsToLearn.includes(newSkill)) {
      setSkillsToLearn([...skillsToLearn, newSkill]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkillsToLearn(skillsToLearn.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="flex">
      <div className={`transition-all duration-300 ${collapsed ? "w-20" : "w-64"} bg-slate-900 text-white min-h-screen p-4`}>
        <div className="flex justify-between items-center mb-8">
          {!collapsed && (
            <Link to="/" className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            </Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="text-white focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const navItem = (
              <div key={item.label} className={`flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                item.active ? "bg-amber-500 text-slate-900" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}>
                <item.icon className={`transition-all ${collapsed ? "w-6 h-6" : "w-5 h-5"}`} />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
              </div>
            );

            return collapsed && item.label !== "Dashboard" ? (
              <div key={item.label} title={item.label}>{navItem}</div>
            ) : (
              navItem
            );
          })}
        </nav>
      </div>

      <div className="flex-1 p-8 transition-all duration-300">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, Alex</h1>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Explore courses
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Path</h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Career goal</span>
                  <Edit2 className="w-4 h-4 text-gray-400 cursor-pointer" onClick={() => {
                    setIsEditing(true);
                    setEditedGoal(careerGoal);
                  }} />
                </div>
                {isEditing ? (
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={editedGoal}
                      onChange={(e) => setEditedGoal(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm flex-1"
                    />
                    <button onClick={() => {
                      setCareerGoal(editedGoal);
                      setIsEditing(false);
                    }} className="text-sm bg-green-600 text-white px-3 py-1 rounded">
                      Save
                    </button>
                  </div>
                ) : (
                  <h3 className="text-2xl font-bold text-slate-800">{careerGoal}</h3>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Skills progress</h2>
              <div className="space-y-4">
                {skillsData.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-gray-700">{skill.name}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-slate-800 h-2 rounded-full transition-all duration-300" style={{ width: `${skill.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Recommended Courses</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.title} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4">
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

            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Progress readiness</h2>
              <p className="text-gray-500 mb-4">Preparedness for the next role</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: `${readiness}%` }}></div>
                </div>
                <span className="text-2xl font-bold text-gray-800">{readiness}%</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills to learn</h3>
              <ul className="space-y-2 mb-4">
                {skillsToLearn.map((skill) => (
                  <li key={skill} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="text-red-500 text-xs ml-2">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <form onSubmit={(e) => {
                e.preventDefault();
                const newSkill = e.target.elements.skill.value.trim();
                if (newSkill) {
                  addSkill(newSkill);
                  e.target.reset();
                }
              }} className="flex gap-2">
                <input type="text" name="skill" placeholder="Add a new skill" className="border px-2 py-1 text-sm flex-1 rounded" />
                <button type="submit" className="bg-amber-500 text-white text-sm px-4 py-1 rounded">
                  Add
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">AI CV Assistant</h3>
              <h4 className="font-medium text-gray-700 mb-2">Personalised Suggestion</h4>
              <p className="text-sm text-gray-600">
                Include relevant metrics to highlight achievements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
