import React from 'react';

const departments = [
  "Hepato biliary pancreatic Surgery",
  "Pediatric Surgery",
  "Cardiothoracic Surgery",
  "Obstetrics and Gynecology Surgery",
  "Neurological Surgery",
  "Emergency Medicine",
  "Internal Medicine",
  "Radiology"
];

function Departments() {
  return (
    <div>
        <div className=''>
            <h2 className='text-4xl font-bold text-center mb-4'>Departments</h2>
            <p className='text-xl  text-center  mb-4'>We offer comprehensive medical care across a wide range of specialties</p>
        </div>
    <div className='flex flex-wrap justify-center gap-6 p-4'>
      {departments.map((department, index) => (
        <div key={index} className='card-component flex flex-col items-center border rounded overflow-hidden shadow-lg w-64'>
          <img
            src='https://via.placeholder.com/150'
            alt={department}
            className='w-full h-40 object-cover'
          />
          <div className='p-4 flex flex-col items-center'>
            <p className='text-xl font-semibold text-center'>{department}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Departments;