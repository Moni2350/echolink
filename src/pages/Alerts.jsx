import { useState } from "react";

function Alerts() {
  const [title, setTitle] = useState("");
  const [alerts, setAlerts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    setAlerts([...alerts, title]);
    setTitle("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        🚨 Emergency Alerts
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl"
      >
        <input
          type="text"
          placeholder="Enter Alert Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
        />

        <button
          type="submit"
          className="w-full bg-red-600 p-3 rounded-lg"
        >
          Send Alert
        </button>
      </form>

      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Active Alerts
        </h2>

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-xl mb-3"
          >
            🚨 {alert}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alerts;