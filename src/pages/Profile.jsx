function Profile() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-slate-900 p-10 rounded-xl w-96">

        <h1 className="text-4xl font-bold mb-6">
          👤 Profile
        </h1>

        <p className="mb-3">
          <strong>Name:</strong> Monika S
        </p>

        <p className="mb-3">
          <strong>Role:</strong> Community Volunteer
        </p>

        <p className="mb-3">
          <strong>Trust Score:</strong> 95%
        </p>

        <p className="mb-3">
          <strong>Location:</strong> Kanchipuram
        </p>

      </div>
    </div>
  );
}

export default Profile;