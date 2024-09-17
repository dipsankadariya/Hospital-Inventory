import React from 'react';


const departments = [
  "Hepato-biliary-pancreatic Surgery",
  "Pediatric Surgery",
  "Cardiothoracic Surgery",
  "Obstetrics and Gynecology Surgery",
  "Neurological Surgery",
];

const depImages = {
  "Hepato-biliary-pancreatic Surgery": "/hbp.png",
  "Pediatric Surgery": "/pediatric.png",
  "Cardiothoracic Surgery": "/cardio.png",
  "Obstetrics and Gynecology Surgery": "/obs.png",
  "Neurological Surgery": "/neuro.png",
};

function Departments() {
  return (
    <div className='m-10 bg-shade'>
      <p className='text-4xl font-bold text-center mb-4 text-dblue'>Our Departments</p>
      <div className='flex flex-wrap gap-6 justify-center'>
        {departments.map((department, index) => (
          <div
            key={index}
            className='flex flex-col bg-white shadow-md rounded-lg w-64 h-40 p-4 justify-center items-center'
          >
            <div className='flex items-center justify-center w-full h-24 '>
              <img
                src={depImages[department]}
                alt={department}
                className='w-20 h-20 object-cover rounded-full'
              />
            </div>
            <h2 className='text-xl font-bold text-dgreen text-center'>{department}</h2>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Departments;
