import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-[#f5f6fc] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-[#00214d] text-white flex justify-between items-center px-6 py-4">
        <Link to = "/" className="flex items-center gap-2">
          <img src="/logo.png" href = "#home" alt="Logo" className="w-8 h-8" />
        </Link>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#About" className="hover:underline">About</a>
          <a href="#Contact" className="hover:underline">Contact</a>
          <Link to = "/signin" className="bg-[#ffa600] text-black px-4 py-1 rounded-full text-sm font-medium">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section  id = "home" className="flex flex-col lg:flex-row justify-between items-center px-20 py-40 max-w-7xl mx-auto">
        <div className="max-w-md mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Find your personalized path to your dream job</h1>
          <p className="text-sm mb-6 text-gray-600">Pathway calculates the steps you need to progress in your career, identifying the roles and skills required to reach your goals</p>
          <Link to = "/signup" className="bg-[#ffa600] text-black px-4 py-2 rounded-full text-sm font-medium">
              <button >Get Started</button>
          </Link>
        </div>
        <div>
          <img src="/path.png" alt="Career Path" className="w-[300px] lg:w-[400px]" />
        </div>
      </section>

      {/* About Section */}
      <section id = 'About' className="px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl text-center underline font-bold mb-10">About us</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img src="/path-about.png" alt="Pathway" className="w-40 h-40 object-contain" />
          <div className="tex t-sm text-gray-700 space-y-4">
            <p>At Pathway, we believe that every professional deserves a clear and achievable route to their dream career. Too often, employees have big ambitions but lack the roadmap, guidance, or tools to get there. That’s where we come in.</p>
            <p><strong>Pathway is an AI-powered career development platform</strong> that helps you chart a personalized career journey from where you are to where you want to be. Whether you’re aiming for a promotion, switching industries, or pursuing a long-term dream role, Pathway identifies the steps, roles, and skills you need to progress confidently.</p>
            <ul className="list-disc list-inside">
              <li>Analyzes your current skill set and highlights areas for growth.</li>
              <li>Recommends targeted learning paths and job roles.</li>
              <li>Provides real-time resume feedback tailored to your goals.</li>
              <li>Tracks your readiness for each career step.</li>
            </ul>
            <p>With Pathway, you’re never guessing—you’re growing. Join thousands of professionals using Pathway to take control of their careers with clarity, confidence, and purpose.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id = "Contact" className="px-8 py-16 max-w-2xl mx-auto">
        <h2 className="text-3xl text-center underline font-bold mb-10">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input type="email" placeholder="Enter your email address" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
          </div>
          <div>
            <textarea placeholder="Enter your message" className="w-full px-4 py-2 h-40 border rounded-md focus:outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#ffa600] text-white py-3 rounded-md font-medium">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#00214d] text-white text-center py-10">
        <div className="mb-4">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mx-auto" />
        </div>
        <div className="flex justify-center space-x-8 text-sm mb-4">
          <a href="#home">Home</a>
          <a href="#home">About</a>
          <a href="#home">Contact</a>
        </div>
        <p className="text-sm">All right reserved</p>
      </footer>
    </div>
  );
}
