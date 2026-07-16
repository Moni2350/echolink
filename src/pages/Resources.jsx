function Resources() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-10">
        📦 Resource Exchange
      </h1>

      <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">

        <div className="mb-4">
          <label className="block mb-2">Resource Name</label>
          <input
            type="text"
            placeholder="Food, Water, Medicine..."
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">Contact Number</label>
          <input
            type="text"
            placeholder="Enter contact number"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg font-bold">
          Add Resource
        </button>

      </div>
    </div>
  );
}

export default Resources;