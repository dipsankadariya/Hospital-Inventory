import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Queue() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-4'>Appointments List</h2>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>ID</th>
              <th className='border border-gray-300 p-2'>Name</th>
              <th className='border border-gray-300 p-2'>Date</th>
              <th className='border border-gray-300 p-2'>Doctor</th>
              <th className='border border-gray-300 p-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className='border border-gray-300 p-2'>{appointment.id}</td>
                <td className='border border-gray-300 p-2'>{appointment.name}</td>
                <td className='border border-gray-300 p-2'>{new Date(appointment.createdAt).toLocaleDateString()}</td>
                <td className='border border-gray-300 p-2'>{appointment.preferredDoctor}</td>
                <td className='border border-gray-300 p-2'>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Queue;