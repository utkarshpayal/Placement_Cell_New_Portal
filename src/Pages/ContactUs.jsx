import React, { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Add logic to handle form submission, e.g., send data to the server

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setFormSubmitted(true);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6 text-center " style={{ color: '#005f99'  }}>Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          {formSubmitted ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
              <p className="font-bold">Form submitted successfully!</p>
              <p>Your message has been received. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block text-gray-800 text-lg mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mb-4"
                required
              />

              <label className="block text-gray-800 text-lg mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mb-4"
                required
              />

              <label className="block text-gray-800 text-lg mb-2">Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full mb-4"
                required
              />

              <div className="flex justify-center">
                <button type="submit" className="text-white px-6 py-2 rounded-md" style={{ backgroundColor: '#005f99'  }}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
