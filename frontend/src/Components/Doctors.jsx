import React from 'react';

const doctors = ["Dr.Sandip Pokhrel ", "Dr.Hari Jung Sahi", "Dr.Sangita Thapa", "Dr.Januka Neupane", "Dr.Sabitra Khadka"];
const specialties = ["Hepato-biliary-pancreatic surgery", "Pediatric surgery", "Cardiothoracic surgery", "Obstetrics and gynecology surgery", "Neurological surgery"];
const departments = [
  "Hepato-biliary-pancreatic Surgery (liver, bile ducts, and pancreas)",
  "Pediatric Surgery (surgery for infants, children, and adolescents)",
  "Cardiothoracic Surgery (heart, lungs, and chest surgeries)",
  "Obstetrics and Gynecology Surgery (women's reproductive health and childbirth-related surgeries)",
  "Neurological Surgery (surgery for the brain, spinal cord, and nervous system)"
];



function Doctors() {
  return (
     <div className='bg-shade'>
    <div className='m-10 '>
    <div className='flex flex-col mb-4'>
      <p className='text-4xl font-bold text-dblue text-center mb-4'>Meet Our Doctors</p>
      <p className='text-xl text-center text-dgray leading-2 mb-4'>Get to Know the Experienced and Compassionate Doctors at Sagarmatha General Hospital.</p>
      <p className='text-xl text-center  text-dgray leading-2 mb-4'>Our Team of Experts is Dedicated to Providing Top-Quality Medical Care Across Various Specialties, Ensuring You Receive the Best Treatment for Your Needs</p>
    </div>
   
    <div className='flex flex-wrap gap-6 justify-center p-4'>
      {doctors.map((doctor, index) => (
        <div className='bg-white shadow-md rounded-lg max-w-md p-4' key={index}>
          <div className='flex flex-col items-center'>
            <img
              src='https://via.placeholder.com/150'
              alt={doctor}
              className='w-32 h-32 object-cover rounded-full mb-4'
            />
            <h2 className='text-2xl font-bold mb-4 text-dpurple'>{doctor}</h2>
            <div className='text-left'>
              <p className="text-gray-700 mb-2 "><strong className='text-black text-tea'>Specialty: </strong>{specialties[index]}</p>
              <p className="text-gray-700"><strong className='text-black text-tea'>Department: </strong>{departments[index]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}

export default Doctors;