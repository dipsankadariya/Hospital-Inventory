import React, { useState } from 'react';
import axios from 'axios';

function Appointments() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    preferredDoctor: '',
    purpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/appointments`, formData);
      console.log('Appointment saved:', response.data);

      setFormData({
        name: '',
        gender: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        preferredDoctor: '',
        purpose: ''
      });
      alert('Appointment saved successfully!');
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert('Error saving appointment. Please try again.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg'>
        <h2 className='text-3xl font-bold mb-6 text-center text-dblue'>Doctors Appointments Form</h2>
        <p className='text-lg mb-6 text-center text-dgray'>Please fill out the form with correct information.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor='name' className='block mb-2 text-lg font-medium'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <label htmlFor='gender' className='block mb-2 text-lg font-medium'>Gender</label>
              <select
                id='gender'
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                <option value='' disabled>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div className='flex-1'>
              <label htmlFor='dob' className='block mb-2 text-lg font-medium'>Date of Birth</label>
              <input
                type='date'
                id='dob'
                name='dob'
                value={formData.dob}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-lg font-medium'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='phone' className='block mb-2 text-lg font-medium'>Phone Number</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='address' className='block mb-2 text-lg font-medium'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='preferredDoctor' className='block mb-2 text-lg font-medium'>Preferred Doctor</label>
            <input
              type='text'
              id='preferredDoctor'
              name='preferredDoctor'
              value={formData.preferredDoctor}
              onChange={handleChange}
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor='purpose' className='block mb-2 text-lg font-medium'>Purpose of Appointment</label>
            <textarea
              id='purpose'
              name='purpose'
              value={formData.purpose}
              onChange={handleChange}
              required
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows='4'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointments;
