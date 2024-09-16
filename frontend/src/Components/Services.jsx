import React from "react";

const services = [
  {
    name: "24 Hours Service",
    description: "Round-the-clock services to handle emergencies and urgent needs anytime."
  },
  {
    name: "Medical Health Care",
    description: "Comprehensive healthcare services for general health maintenance and treatment of various conditions."
  },
  {
    name: "Cardio Monitoring",
    description: "Monitoring heart activity to detect irregularities and ensure cardiovascular health."
  },
  {
    name: "Special Doctor",
    description: "Specialized care from doctors with expertise in specific medical fields."
  },
  {
    name: "Neurological Surgery",
    description: "Surgical treatment for conditions affecting the brain, spinal cord, and nervous system."
  },
  {
    name: "Cardiothoracic Surgery",
    description: "Surgeries related to the heart, lungs, and chest to treat cardiovascular and respiratory conditions."
  },
  {
    name: "Hepato-biliary-pancreatic Surgery",
    description: "Surgeries focusing on the liver, bile ducts, and pancreas to treat conditions affecting these organs."
  },
  {
    name: "Pediatric Surgery",
    description: "Surgical interventions for infants, children, and adolescents to address pediatric health issues."
  },
  {
    name: "Obstetrics and Gynecology Surgery",
    description: "Surgeries related to women's reproductive health and childbirth, including both elective and emergency procedures."
  },
  {
    name: "Rehabilitation Therapy",
    description: "Therapy and exercises to help patients recover and improve functionality after injuries or surgeries."
  },
  {
    name: "Background Checks",
    description: "Thorough background checks to ensure the safety and reliability of patients and staff."
  }
];

function Services() {
  return (
    <div className='m-10 bg-shade'>
      <p className='text-4xl font-bold text-center mb-4'>Our Services</p>
      <div className='flex flex-wrap gap-6 justify-center  items-center'>
        {services.map((service, index) => (
          <div className=' flex flex-col bg-white shadow-md rounded-lg max-w-md p-4 justify-center  items-center' key={index}>
            
            <h2 className='text-2xl font-bold mb-4'>{service.name}</h2>
            <p className='text-gray-700'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;