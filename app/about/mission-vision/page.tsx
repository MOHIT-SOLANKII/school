export default function MissionVision() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Our Mission & Vision
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700">
            To provide quality education in a nurturing environment that encourages intellectual 
            curiosity, creativity, and personal growth, preparing students to become responsible 
            global citizens.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h2>
          <p className="text-gray-700">
            To be a leading educational institution that inspires excellence, fosters innovation, 
            and nurtures well-rounded individuals who will make positive contributions to society.
          </p>
        </div>
      </div>
    </div>
  );
}