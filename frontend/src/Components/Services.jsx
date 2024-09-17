import React from "react";


const services = [
  {
    name: "24 Hours Service",
    description: "Round-the-clock services to handle emergencies and urgent needs anytime.",
    image: "/24hours.png"
  },
  {
    name: "Medical Health Care",
    description: "Comprehensive healthcare services for general health maintenance and treatment of various conditions.",
    image:"/healthcare.png"
  },
  {
    name: "Cardio Monitoring",
    description: "Monitoring heart activity to detect irregularities and ensure cardiovascular health.",
    image:"cardiomon.png"
  },
  {
    name: "Special Doctor",
    description: "Specialized care from doctors with expertise in specific medical fields.",
    image:"/spdoc.png"
  },
  {
    name: "Neurological Surgery",
    description: "Surgical treatment for conditions affecting the brain, spinal cord, and nervous system.",
    image:"/neuro.png"
  },
  {
    name: "Cardiothoracic Surgery",
    description: "Surgeries related to the heart, lungs, and chest to treat cardiovascular and respiratory conditions.",
    image:"/cardio.png"
  },
  {
    name: "Hepato-biliary-pancreatic Surgery",
    description: "Surgeries focusing on the liver, bile ducts, and pancreas to treat conditions affecting these organs.",
    image:"/hbp.png"
  },
  {
    name: "Pediatric Surgery",
    description: "Surgical interventions for infants, children, and adolescents to address pediatric health issues.",
    image:"/pediatric.png"
  },
  {
    name: "Obstetrics and Gynecology Surgery",
    description: "Surgeries related to women's reproductive health and childbirth, including both elective and emergency procedures.",
    image:"/obs.png"
  },
  {
    name: "Rehabilitation Therapy",
    description: "Therapy and exercises to help patients recover and improve functionality after injuries or surgeries.",
    image:"/rehabilitation.png"
  },
  {
    name: "Background Checks",
    description: "Thorough background checks to ensure the safety and reliability of patients and staff.",
    image:"checkup.png"
  }
];

function Services() {
  return (
    <div className='m-10 bg-shade'>
      <p className='text-4xl font-bold text-center mb-4 text-dblue'>Our Services</p>
      <div className='flex flex-wrap gap-6 justify-center items-stretch'>
        {services.map((service, index) => (
          <div className='flex flex-col bg-white shadow-md rounded-lg max-w-md p-4 justify-between items-center min-h-[150px]' key={index}>
             <img
                  src={service.image}
                
                  className='w-20 h-20 object-cover rounded-full mb-4'
                />
            <h2 className='text-2xl font-bold mb-4 text-dgreen'>{service.name}</h2>
            <p className='text-gray-700 text-lblue flex-1'>{service.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Services;
