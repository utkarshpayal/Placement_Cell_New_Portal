import React from "react";
import "animate.css";
import BKBIET from "../assets/BKBIET.png";
import "../App.css"; // Import App.css

export const Home = () => {
  const homepageImageUrl =
    "https://placements.iiitl.ac.in/static/media/iiitl.7631c287.jpeg";
  const taraSutariaImageUrl =
    "https://www.celebritynews.wiki/wp-content/uploads/2019/06/Tara-Sutaria.jpg";

  return (
    <>
      <div className="container mx-auto p-8 bg-white rounded-md shadow-md mt-6">
        <div className="max-w-28 h-auto mb-2 mx-auto">
          <img
            src="https://imgs.search.brave.com/ugR9DJ3OF2facjPF2tvSXRaH1WxryXB-9ZKqmZuThB0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yMy9M/b2dvX0JLX0Jpcmxh/X0luc3RpdHV0ZV9v/Zl9FbmdpbmVlcmlu/Z18lMjZfVGVjaG5v/bG9neV9QaWxhbmku/cG5n"
            alt="Brave Logo"
          />
        </div>
        <div className="hover:text-teal-300 transition duration-300 mx-auto flex justify-center">
          <img src={BKBIET} alt="BKBIET Logo" />
        </div>
        <img src={homepageImageUrl} alt="Homepage" />
        <div className="text-center p-8">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">
            Welcome to Placement Cell App
          </h1>

          {/* Tara Sutaria Section */}
          <div className="flex items-center justify-center p-5">
            <div className="flex flex-row bg-gray-100 w-full sm:w-3/4 md:w-[600px] items-center justify-center rounded-md overflow-hidden">
              <div className="h-[70%] w-[200px] bg-gray-100 flex items-center overflow-hidden">
                <img
                  src={taraSutariaImageUrl}
                  className="transform hover:scale-110 transition-transform duration-300 w-full h-full object-cover"
                  alt="Tara Sutaria"
                />
              </div>
              <div className="w-[300px] pl-4">
                <h1 className="font-bold text-3xl mb-1">Tara Sutaria</h1>
                <h2 className="text-gray-500 mb-4">Placement Officer</h2>
                <p className="text-justify text-gray-700 mb-4">
                  The Training and Placement cell of Indian Institute of
                  Information Technology, Lucknow is an integral part of the
                  academics. It helps in shaping the careers of our students in
                  the field of Information Technology.
                </p>
                <p
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => window.location.href = '/'}
                >
                  Load more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
