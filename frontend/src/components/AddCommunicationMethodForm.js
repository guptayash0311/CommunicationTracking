import React, { useState } from 'react';
import axios from 'axios';

const AddCommunicationMethodForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sequence: 1,
    mandatory: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/methods/", formData);
      alert('Communication method added successfully!');
      setFormData({
        name: '',
        description: '',
        sequence: 1,
        mandatory: false,
      });
    } catch (error) {
      console.error('Error adding communication method:', error);
      alert('Failed to add communication method. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-slate-200 shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Add Communication Method</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Sequence</label>
        <input
          type="number"
          name="sequence"
          value={formData.sequence}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="mandatory"
            checked={formData.mandatory}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700 font-bold">Mandatory</span>
        </label>
      </div>
      <div className='flex justify-center'>
      <button
        type="submit"
        className=" mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Communication Method
      </button>
      <form action="/">
            <button className=" mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Back to Home</button>
        </form>
      </div>
    </form>
  );
};

export default AddCommunicationMethodForm;
