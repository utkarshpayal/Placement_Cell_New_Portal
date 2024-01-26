import React, { useState } from 'react';

export const AddEntry = ({ onAddEntry }) => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [placed, setPlaced] = useState('');

  const handleAddEntry = () => {
    // Validate the input fields, you can add more validation logic as needed
    if (!name || !branch || !cgpa || !placed) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a new student entry object
    const newEntry = {
      name,
      branch,
      cgpa: parseFloat(cgpa), // Convert cgpa to a number
      placed,
    };

    // Call the onAddEntry function from the parent component with the new entry
    onAddEntry(newEntry);

    // Clear the form fields after adding the entry
    setName('');
    setBranch('');
    setCgpa('');
    setPlaced('');
  };

  return (
    <>
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center " style={{ color: '#005f99'  }}>Add New Student</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-black ">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black ">Branch</label>
          <select
  value={branch}
  onChange={(e) => setBranch(e.target.value)}
  className="border-2  border-gray-300 p-2 w-full focus:border-blue-500 rounded p-2"
>
  {['CS', 'IT', 'DS'].map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

        </div>
        <div className="mb-4">
          <label className="block text-black ">CGPA</label>
          <input
            type="number"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black ">Placed</label>
          <select
  value={branch}
  onChange={(e) => setBranch(e.target.value)}
  className="border-2  border-gray-300 p-2 w-full focus:border-blue-500 rounded p-2"
>
  {['Yes', 'No'].map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>
        </div>
        <button
          className="mt-4  font-bold   bg-blue-500 text-white p-2 w-full rounded  hover:bg-blue-600 focus:outline-none"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
      </div>
    </div>
    </>
  );
};
