import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-7xl font-bold mb-4">
        🚀 EchoLink
      </h1>

      <p className="text-3xl mb-4 font-semibold text-blue-400">
        First Contact Communication Hub
      </p>

      <p className="max-w-2xl text-gray-400 mb-8">
        After humanity's first contact with extraterrestrial life,
        all traditional communication systems were disabled.
        EchoLink provides a decentralized platform for emergency
        broadcasts, resource coordination, and community survival.
      </p>

      <div className="flex gap-4">
        <Link to="/dashboard">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Enter Command Center
          </button>
        </Link>

        <Link to="/alerts">
          <button className="bg-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-700 transition">
            Emergency Broadcasts
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            📡 Broadcast Network
          </h2>
          <p className="text-gray-400">
            Share critical alerts and warnings across communities.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            📦 Survival Resources
          </h2>
          <p className="text-gray-400">
            Coordinate food, water, medicine, and shelter supplies.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-2">
            👥 Community Coordination
          </h2>
          <p className="text-gray-400">
            Help survivors stay connected and organized after First Contact.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;