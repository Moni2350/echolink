import { useState } from "react";

function Dashboard() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([
    "📡 Alien signal detected near Northern Zone.",
    "🏠 Safe shelter available for 50 survivors.",
    "🚑 Medical response team active in Sector 7.",
  ]);

  const handlePost = () => {
    if (post.trim() === "") return;

    setPosts([post, ...posts]);
    setPost("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        🚀 First Contact Coordination Center
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">
            🚨 Emergency Broadcasts
          </h2>
          <p className="text-gray-400 mt-2">
            Critical alerts shared across survivor communities
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">
            📦 Survival Resources
          </h2>
          <p className="text-gray-400 mt-2">
            Food, water, shelter and medical supplies
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">
            👥 Survivor Network
          </h2>
          <p className="text-gray-400 mt-2">
            Stay connected with nearby survivor groups
          </p>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="mt-10 bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          📢 First Contact Updates
        </h2>

        <ul className="space-y-3">
          <li>📡 Unknown signal detected near Sector 8</li>
          <li>🏠 Safe Zone established for civilians</li>
          <li>🚑 Medical support team deployed</li>
        </ul>
      </div>

      {/* Community Feed */}
      <div className="mt-10 bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          👥 Survivor Feed
        </h2>

        <input
          type="text"
          placeholder="Broadcast a message to survivors..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
        />

        <button
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Broadcast
        </button>

        <div className="mt-6 space-y-3">
          {posts.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;