import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-7xl font-bold mb-4">
        🌍 EchoLink
      </h1>

      <p className="text-2xl mb-4">
        Rebuilding Communication After First Contact
      </p>

      <p className="max-w-2xl text-gray-400 mb-8">
        Humanity's communication systems have collapsed after
        first contact with extraterrestrial life. EchoLink helps
        communities stay connected through emergency alerts,
        resource sharing, and community coordination.
      </p>

      <div className="flex gap-4">
        <Link to="/dashboard">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>

        <Link to="/alerts">
          <button className="bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition">
            Emergency Alerts
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        
        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            🚨 Emergency Alerts
          </h2>
          <p className="text-gray-400">
            Quickly notify nearby communities about urgent situations.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            📦 Resource Exchange
          </h2>
          <p className="text-gray-400">
            Share food, water, medicine, and essential supplies.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            👥 Community Network
          </h2>
          <p className="text-gray-400">
            Connect people and coordinate relief efforts effectively.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;