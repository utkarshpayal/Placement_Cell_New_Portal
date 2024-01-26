import React from 'react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-5xl font-extrabold mb-8 text-center " style={{ color: '#005f99'  }}>Welcome to Placement Cell</h1>
        <div className="max-w-2xl mx-auto text-lg text-gray-900">
          <p className="mb-6">
            Explore the dynamic world of opportunities at BK Birla Institute Of Engineering And Technology, Pilani with
            our Placement Cell App. We are on a mission to guide and empower students in their career journey.
          </p>
          <p className="mb-6">
            The Placement Cell acts as a catalyst, connecting talented students with top-notch companies. Discover
            details about companies, their placement history, and inspiring success stories of our students.
          </p>
          <p className="mb-6">
            Whether you're a student chasing your dream job, a recruiter seeking exceptional talent, or a visitor
            interested in our success stories, you'll find valuable insights here.
          </p>
          <p className="mb-6">
            <span className="font-bold" style={{ color: '#005f99'  }}>Ready to dive in?</span> Explore the sections of our app and
            uncover the vibrant placement ecosystem at our institute.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className=" text-white py-2 px-6 rounded-full hover:bg-teal-700 transition duration-300"
            style={{ backgroundColor: '#005f99'  }}
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
};