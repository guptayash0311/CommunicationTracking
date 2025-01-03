import React, { useState } from 'react';
import axios from 'axios';

const AddCompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedin_profile: '',
    emails: '',
    phone_numbers: '',
    comments: '',
    communication_periodicity: 14,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/companies/', formData);
      alert('Company added successfully!');
      setFormData({
        name: '',
        location: '',
        linkedin_profile: '',
        emails: '',
        phone_numbers: '',
        comments: '',
        communication_periodicity: 14,
      });
    } catch (error) {
      console.error('Error adding company:', error);
      alert('Failed to add company. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-slate-200 shadow rounded"
    >
      <h2 className="text-xl font-bold mb-2">Add Company</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-bold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin_profile"
            value={formData.linkedin_profile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Emails</label>
          <input
            type="text"
            name="emails"
            value={formData.emails}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">Phone Numbers</label>
          <input
            type="text"
            name="phone_numbers"
            value={formData.phone_numbers}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-1">
            Communication Periodicity (days)
          </label>
          <input
            type="number"
            name="communication_periodicity"
            value={formData.communication_periodicity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold mb-1">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
      </div>
      <div className='flex justify-center'>
      <button
        type="submit"
        className="mt-5 mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Company
      </button>
      <form action="/">
            <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Back to Home</button>
        </form>
     
      </div>
    </form>
  );
};

export default AddCompanyForm;
