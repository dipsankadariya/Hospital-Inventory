import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted successfully', formData);
  };

  return ( 
    <div>
    <div>
    <h2 className="text-2xl font-bold mb-6 text-center">Doctors Appointments Form</h2>
    <p className='text-xl mb-6 text-center'>Please Fill out the form  with correct informations.</p>
    </div>
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor='name' className="block mb-1">Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='gender' className="block mb-1">Gender</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value='' disabled>Select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor='dob' className="block mb-1">Date of Birth</label>
          <input
            type='date'
            id='dob'
            name='dob'
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='email' className="block mb-1">Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='phone' className="block mb-1">Phone Number</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='address' className="block mb-1">Address</label>
          <textarea
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='preferredDoctor' className="block mb-1">Preferred Doctor</label>
          <input
            type='text'
            id='preferredDoctor'
            name='preferredDoctor'
            value={formData.preferredDoctor}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor='purpose' className="block mb-1">Purpose of Appointment</label>
          <textarea
            id='purpose'
            name='purpose'
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          type='submit'
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default Appointments;