export default function Disclosure() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Mandatory Disclosure
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">School Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Affiliation Number: RKS123456</li>
              <li>Year of Establishment: 2010</li>
              <li>School Timing: 8:00 AM to 2:30 PM</li>
              <li>Medium of Instruction: English</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Infrastructure</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Total Campus Area: 5 Acres</li>
              <li>Classrooms: 40</li>
              <li>Laboratories: 5</li>
              <li>Library Books: 10,000+</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Faculty</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Total Teachers: 50</li>
              <li>Student-Teacher Ratio: 20:1</li>
              <li>Qualified Support Staff: 25</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}