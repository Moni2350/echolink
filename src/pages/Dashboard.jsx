import { useState } from "react";

function Dashboard() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([
    "Need drinking water for 15 people.",
    "Food packets available near Community Hall.",
    "Medical camp active from 10 AM to 5 PM.",
  ]);

  const handlePost = () => {
    if (post.trim() === "") return;

    setPosts([post, ...posts]);
    setPost("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        🌍 EchoLink Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">🚨 Emergency Alerts</h2>
          <p className="text-gray-400 mt-2">
            Active emergency notifications
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">📦 Resources</h2>
          <p className="text-gray-400 mt-2">
            Food, water and shelter support
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">👥 Community</h2>
          <p className="text-gray-400 mt-2">
            Stay connected with nearby people
          </p>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="mt-10 bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          📢 Recent Updates
        </h2>

        <ul className="space-y-3">
          <li>🚨 Medical assistance needed in Sector 12</li>
          <li>📦 Food packets available at Community Center</li>
          <li>🏠 Temporary shelter opened near City Hall</li>
        </ul>
      </div>

      {/* Community Feed */}
      <div className="mt-10 bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">
          👥 Community Feed
        </h2>

        <input
          type="text"
          placeholder="Share an update..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
        />

        <button
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Post
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