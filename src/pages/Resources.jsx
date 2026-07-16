function Resources() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        📦 Resources
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">🍞 Food Packets</h2>
          <p>150 packets available</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">💧 Water Supply</h2>
          <p>500 Litres Available</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">🏥 Medical Kits</h2>
          <p>75 Kits Available</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold">🏠 Shelter Beds</h2>
          <p>40 Beds Available</p>
        </div>

      </div>
    </div>
  );
}

export default Resources;