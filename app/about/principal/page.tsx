export default function Principal() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Principal's Desk
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Dear Parents and Students,
          </p>
          <p>
            Welcome to Rainbow Kids School! As the Principal, it gives me immense pleasure to lead 
            an institution that believes in nurturing young minds with care, creativity, and commitment.
          </p>
          <p>
            At Rainbow Kids, we understand that each child is unique and has infinite potential. 
            Our approach to education goes beyond textbooks – we focus on developing well-rounded 
            individuals who are confident, compassionate, and ready to face the challenges of tomorrow.
          </p>
          <p>
            We invite you to be part of our vibrant community where learning is an adventure and 
            every day brings new opportunities for growth and discovery.
          </p>
          <p className="pt-4">
            Warm regards,<br />
            Dr. Sarah Johnson<br />
            Principal
          </p>
        </div>
      </div>
    </div>
  );
}