function Profile() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        👤 Profile
      </h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg text-center">

        <div className="text-7xl mb-4">
          👩
        </div>

        <h2 className="text-3xl font-bold">
          Monika S
        </h2>

        <p className="text-gray-400 mt-2">
          Community Volunteer
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="font-bold">⭐ Trust Score</h3>
            <p className="text-2xl">95</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="font-bold">📍 Location</h3>
            <p>Kanchipuram</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="font-bold">🚨 Alerts Posted</h3>
            <p>12</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="font-bold">📦 Resources Shared</h3>
            <p>8</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;