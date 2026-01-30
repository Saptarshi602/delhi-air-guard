import TopNavbar from "./components/TopNavbar"

export default function Home() {
  return (
    <>
      <TopNavbar />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">
          Air Quality Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Current AQI</h3>
            <p className="text-4xl font-bold text-orange-500">135</p>
            <p className="text-sm text-gray-500 mt-2">
              Moderate – Sensitive groups should limit outdoor activity
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Health Advisory</h3>
            <ul className="list-disc ml-4 text-sm text-gray-600">
              <li>Wear a mask outdoors</li>
              <li>Avoid heavy exercise</li>
              <li>Keep inhaler if asthmatic</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Save Report</h3>
            <p className="text-sm text-gray-600 mb-3">
              Login to save health reports and get AI-based suggestions
            </p>
            <button className="btn-primary w-full">
              Login to Save
            </button>
          </div>

        </div>
      </main>
    </>
  )
}
