import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">

        <div className="font-bold text-xl">
          🌍 EchoLink
        </div>

        <div className="flex gap-8">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/alerts" className="hover:text-blue-400">
            Alerts
          </Link>

          <Link to="/resources" className="hover:text-blue-400">
            Resources
          </Link>

          <Link to="/profile" className="hover:text-blue-400">
            Profile
          </Link>
        </div>

      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-gray-400 p-4">
        Built for Build.IT 2026 Hackathon 🚀
      </footer>
    </div>
  );
}

export default App;