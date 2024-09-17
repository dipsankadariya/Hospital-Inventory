import React from 'react';


const doctors = ["Dr.Sandip Pokhrel", "Dr.Hari Jung Sahi", "Dr.Sangita Thapa", "Dr.Januka Thapa", "Dr.Krishna Prasai", "Dr.Bhasma Thakur"];
const doctorSpecialties = [
  "Hepato-biliary-pancreatic surgery", 
  "Pediatric surgery", 
  "Cardiothoracic surgery", 
  "Obstetrics and gynecology surgery", 
  "Neurological surgery", 
  "General surgery"
];
const doctorDepartments = [
  "Hepato-biliary-pancreatic Surgery (liver, bile ducts, and pancreas)",
  "Pediatric Surgery (surgery for infants, children, and adolescents)",
  "Cardiothoracic Surgery (heart, lungs, and chest surgeries)",
  "Obstetrics and Gynecology Surgery (women's reproductive health and childbirth-related surgeries)",
  "Neurological Surgery (surgery for the brain, spinal cord, and nervous system)",
  "General Surgery (general medical surgeries)"
];
const doctorImages = ["/doctor.png", "/doctor2.png", "/doctor3.png", "/doctor4.png", "/doctor.png", "/doctor.png"];


const nurses = [
  "Shanti Sharma", "Sarita Karki",      
  "Pratiksha Acharya", "Nurse Ramila Rai",      
  "Alisha Shrestha", " Nisha Rai",         
  "Sushmita Ghimire", " Sunita Sharma",   
  "Ranjita Pandey", " Kamala Basnet",      
  "Bishnu Thapa", " Manju Khadka"        
];
const nurseSpecialties = [
  "Hepato-biliary-pancreatic care", "Hepato-biliary-pancreatic care",
  "Pediatric care", "Pediatric care", 
  "Cardiothoracic care", "Cardiothoracic care", 
  "Maternity care", "Maternity care", 
  "Neurological care", "Neurological care", 
  "General surgery care", "General surgery care"
];
const nurseDepartments = [
  "Hepato-biliary-pancreatic Surgery (care for liver, bile ducts, and pancreas)", 
  "Hepato-biliary-pancreatic Surgery (care for liver, bile ducts, and pancreas)", 
  "Pediatric Surgery (care for infants, children, and adolescents)", 
  "Pediatric Surgery (care for infants, children, and adolescents)", 
  "Cardiothoracic Surgery (care for heart, lungs, and chest surgeries)", 
  "Cardiothoracic Surgery (care for heart, lungs, and chest surgeries)", 
  "Obstetrics and Gynecology Surgery (women's reproductive health and childbirth-related care)", 
  "Obstetrics and Gynecology Surgery (women's reproductive health and childbirth-related care)", 
  "Neurological Surgery (care for brain, spinal cord, and nervous system)", 
  "Neurological Surgery (care for brain, spinal cord, and nervous system)", 
  "General Surgery (post-surgery care)", 
  "General Surgery (post-surgery care)"
];
const nurseImages = [
 "/doctor3.png" 
];



function Doctors() {
  return (
    <div className='bg-shade'>
      <div className='m-10'>
        
        <div className='flex flex-col mb-4'>
          <p className='text-4xl font-bold text-dblue text-center mb-4'>Meet Our Doctors & Nurses</p>
          <p className='text-xl text-center text-dgray leading-2 mb-4'>
            Get to Know the Experienced and Compassionate Doctors and Nurses at Sagarmatha General Hospital.
          </p>
          <p className='text-xl text-center text-dgray leading-2 mb-4'>
            Our Team of Experts is Dedicated to Providing Top-Quality Medical Care Across Various Specialties, Ensuring You Receive the Best Treatment for Your Needs
          </p>
        </div>

       
        <div className='text-4xl mt-16 font-bold text-dblue text-center mb-4'>Our Doctors</div>
        <div className='flex flex-wrap gap-6 justify-center p-4'>
          {doctors.map((doctor, index) => (
            <div className='bg-white shadow-md rounded-lg max-w-md p-4' key={index}>
              <div className='flex flex-col items-center'>
                <img
                  src={doctorImages[index]}
                  alt={doctor}
                  className='w-32 h-32 object-cover rounded-full mb-4'
                />
                <h2 className='text-2xl font-bold mb-4 text-dpurple'>{doctor}</h2>
                <div className='text-left'>
                  <p className="text-gray-700 mb-2">
                    <strong className='text-black text-tea'>Specialty: </strong>{doctorSpecialties[index]}
                  </p>
                  <p className="text-gray-700">
                    <strong className='text-black text-tea'>Department: </strong>{doctorDepartments[index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className='text-4xl font-bold text-dblue text-center mb-4  m-16'>Our Nurses</div>
        <div className='flex flex-wrap gap-6 justify-center p-4'>
          {nurses.map((nurse, index) => (
            <div className='bg-white shadow-md rounded-lg max-w-md p-4' key={index}>
              <div className='flex flex-col items-center'>
                <img
                  src={nurseImages}
                  alt={nurse}
                  className='w-32 h-32 object-cover rounded-full mb-4'
                />
                <h2 className='text-2xl font-bold mb-4 text-dpurple'>{nurse}</h2>
                <div className='text-left'>
                  <p className="text-gray-700 mb-2">
                    <strong className='text-black text-tea'>Specialty: </strong>{nurseSpecialties[index]}
                  </p>
                  <p className="text-gray-700">
                    <strong className='text-black text-tea'>Department: </strong>{nurseDepartments[index]}
                  </p>
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
