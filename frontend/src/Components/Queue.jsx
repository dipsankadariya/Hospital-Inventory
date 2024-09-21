import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Queue = () => {
  const dummyAppointments = [
    {
      id: '1',
      name: 'Dipsan Kadariya',
      dob: '2000-05-14',
      preferredDoctor: 'Dr.Sangita Thapa',
      status: 'Confirmed'
    },
    {
      id: '2',
      name: 'Amit Thapa',
      dob: '1999-07-22',
      preferredDoctor: 'Dr.Januka Thapa',
      status: 'Pending'
    },
    {
      id: '3',
      name: 'Rujan Katwal',
      dob: '1985-11-03',
      preferredDoctor: 'Dr. Hari Jung Sahi',
      status: 'Cancelled'
    }
  ];

  const [appointments, setAppointments] = useState(dummyAppointments);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const apiUrl = 'http://localhost:5000';
      const response = await axios.get(`${apiUrl}/api/appointments`);
      
      setAppointments(response.data.length ? response.data : dummyAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      
      setAppointments(dummyAppointments);
    }
  };


  const handleEdit =(appointments) =>{
    console.log("hehe");
  }

  const handleDelete = async (id) => {
    try {
      const apiUrl = 'http://localhost:5000';
      await axios.delete(`${apiUrl}/api/appointments/${id}`);
      
      // Update state to reflect the deleted appointment
      setAppointments(appointments.filter(appt => appt.id !== id));
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Error deleting the appointment');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Appointments List</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Date</th>
                <th className="border border-gray-300 p-2">Doctor</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="border border-gray-300 p-2">{appointment.id}</td>
                  <td className="border border-gray-300 p-2">{appointment.name}</td>
                  <td className="border border-gray-300 p-2">{new Date(appointment.dob).toLocaleDateString()}</td>
                  <td className="border border-gray-300 p-2">{appointment.preferredDoctor}</td>
                  <td className="border border-gray-300 p-2">{appointment.status || 'Pending'}</td>
                  <td className="border border-gray-300 p-2">
                    <div className="flex justify-center space-x-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded text-lg transition duration-300 ease-in-out" onClick={handleEdit}>
                        Edit
                      </button>
                      <button className="bg-red hover:bg-red text-white font-semibold py-1 px-2 rounded text-lg transition duration-300 ease-in-out" onClick={()=>handleDelete(appointment.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Queue;