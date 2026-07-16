function Resources() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        📦 Survival Resources Network
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            🍞 Emergency Food Supplies
          </h2>
          <p className="mt-2 text-gray-400">
            150 survival food packs available
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            💧 Water Distribution Centers
          </h2>
          <p className="mt-2 text-gray-400">
            500 litres of clean water available
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            🏥 Medical Response Kits
          </h2>
          <p className="mt-2 text-gray-400">
            75 emergency medical kits available
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">
            🏠 Survivor Shelters
          </h2>
          <p className="mt-2 text-gray-400">
            40 shelter beds currently available
          </p>
        </div>

      </div>
    </div>
  );
}

export default Resources;