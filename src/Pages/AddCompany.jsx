import React, { useState } from 'react';

export const AddCompany = ({ onAddCompany }) => {
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [post, setPost] = useState('');
  const [packageValue, setPackageValue] = useState('');
  const [visited, setVisited] = useState('');
  const [numberOfStudents, setNumberOfStudents] = useState('');

 const handleAddCompany = () => {
    // Validate the input fields, you can add more validation logic as needed
    if (!companyName || !location || !post || !packageValue || !visited || !numberOfStudents) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new company entry object
    const newCompany = {
      companyName,
      location,
      post,
      package: parseFloat(packageValue), // Convert package to a number
      visited,
      numberOfStudents: parseInt(numberOfStudents), // Convert numberOfStudents to an integer
    };

    // Call the onAddCompany function from the parent component with the new company
    onAddCompany(newCompany);

    // Clear the form fields after adding the company
    setCompanyName('');
    setLocation('');
    setPost('');
    setPackageValue('');
    setVisited('');
    setNumberOfStudents('');
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl text-white font-bold mb-6 flex items-center justify-center">Add New Company</h1>
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-white font-bold">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold">Post</label>
            <input
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold">Package</label>
            <input
              type="number"
              value={packageValue}
              onChange={(e) => setPackageValue(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold">Visited</label>
            <input
              type="text"
              value={visited}
              onChange={(e) => setVisited(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold">No. of Students</label>
            <input
              type="number"
              value={numberOfStudents}
              onChange={(e) => setNumberOfStudents(e.target.value)}
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <button
            className="mt-4 bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddCompany}
          >
            Add Company
          </button>
        </div>
      </div>
    </>
  );
};
