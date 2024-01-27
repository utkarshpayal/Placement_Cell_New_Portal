import React from 'react';

const Session2022 = () => {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Placement 2022</h1>

      {/* Display session information */}
      <div className="bg-blue-200 p-4 rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">Session 2021</h2>
        <p className="text-gray-600">Explore exciting placement opportunities in 2022.</p>
      </div>

      {/* Display placement images */}
      <div className="flex flex-row items-center justify-around mt-8">
        <img
          src="https://placements.iiitl.ac.in/static/media/gearmtec23.4d2d6f26.png"
          alt="Placement Image 1"
          className="w-1/4 rounded-md shadow-md"
        />
        <img
          src="https://placements.iiitl.ac.in/static/media/gearmtec23.4d2d6f26.png"
          alt="Placement Image 2"
          className="w-1/4 rounded-md shadow-md"
        />
        <img
          src="https://placements.iiitl.ac.in/static/media/gearmtec23.4d2d6f26.png"
          alt="Placement Image 3"
          className="w-1/4 rounded-md shadow-md"
        />
      </div>

      {/* Additional content or features can be added here */}
    </div>
  );
};

export default Session2022;
