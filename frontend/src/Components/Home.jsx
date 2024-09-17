import React from 'react';
import Footer from './Footer';

function Home() {
  const countboxes = [
    { service: "Consultation", number: "10000", image: "/consultation.png" },
    { service: "Surgeries", number: "2000", image: "/surgery.png" },
    { service: "Angiography", number: "800", image: "/angiography.png" },
    { service: "Radiology", number: "1200", image: "/radiology.png" },
    { service: "Pathology", number: "1500", image: "/pathology.png" },
    { service: "Emergency Cases", number: "5000", image: "/emergency.png" }
  ];

  const reviews = [
    { name: 'Anonymous', description: "The staff at Sagarmatha General Hospital is always helpful and caring." },
    { name: 'Anonymous', description: "Excellent medical services and compassionate care." },
    { name: 'Anonymous', description: "Wonderful experience at Sagarmatha General Hospital. The staff was supportive and the care was exceptional." },
    { name: 'Anonymous', description: "I was impressed by the doctors' thoroughness and genuine concern for my well-being. Their expertise was evident and reassuring." }
  ];

  const selectedServices = [
    { name: "Neurological Surgery", description: "Surgical treatment for conditions affecting the brain, spinal cord, and nervous system." },
    { name: "Cardiothoracic Surgery", description: "Surgeries related to the heart, lungs, and chest to treat cardiovascular and respiratory conditions." },
    { name: "Hepato-biliary-pancreatic Surgery", description: "Surgeries focusing on the liver, bile ducts, and pancreas to treat conditions affecting these organs." },
    { name: "Pediatric Surgery", description: "Surgical interventions for infants, children, and adolescents to address pediatric health issues." },
    { name: "Obstetrics and Gynecology Surgery", description: "Surgeries related to women's reproductive health and childbirth, including both elective and emergency procedures." },
    { name: "24 Hours Service", description: "Round-the-clock services to handle emergencies and urgent needs anytime." },
  ];

  const serviceImageMap = {
    "24 Hours Service": "/24hours.png",
    "Neurological Surgery": "/neuro.png",
    "Cardiothoracic Surgery": "/cardio.png",
    "Hepato-biliary-pancreatic Surgery": "/hbp.png",
    "Pediatric Surgery": "/pediatric.png",
    "Obstetrics and Gynecology Surgery": "/obs.png"
  };

  const details = [
    {
      number: "5",
      service: "Total Doctor",
      image: "/doctor.png",
      bgColor: "bg-red600",
    },
    {
      number: "20",
      service: "Total Patients",
      image: "/patient.png",
      bgColor: "bg-orange500",
    },
    {
      number: "4",
      service: "Waiting Patients",
      image: "/patient.png",
      bgColor: "bg-dgreen",
    },
  ];


  return (
    <div className='bg-shade'>
      <div className='mb-16'>
        <h1 className="text-4xl font-bold text-dblue mb-8 text-center">Welcome to Sagarmatha General Hospital</h1>
        
        <p className='mt-2 text-xl text-dgray text-start'>
          Sagarmatha General Hospital, established in 2024, stands as a beacon of advanced healthcare in the heart of Birtamode, Jhapa. Our state-of-the-art facility is dedicated to delivering exceptional medical care with compassion and expertise. Equipped with cutting-edge technology and a team of highly skilled professionals, we offer a comprehensive range of services to meet the diverse needs of our community. From routine consultations to complex surgeries, our commitment is to provide top-quality care in a comfortable and welcoming environment. At Sagarmatha General Hospital, your health and well-being are our top priorities.
        </p>
      </div>


      <div className="flex flex-wrap gap-6 justify-center p-4">
    {details.map((detail, index) => (
      <div
        className={`shadow-md rounded-lg flex items-center p-8 max-w-xs flex-1 min-w-[250px] ${detail.bgColor}`}
        key={index}
      >
        <img
          src={detail.image}
          alt={detail.service}
          className="w-20 h-20 mr-4"
        />
        <div className="flex flex-col text-left">
          <p className="text-3xl font-bold text-white">
            {detail.number}<span className="text-3xl text-white-600">+</span>
          </p>
          <p className="text-xl font-bold text-white mt-2">
            {detail.service}
          </p>
        </div>
      </div>
    ))}
  </div>

      <div className='mt-8 mb-16 p-6 bg-dindigo text-white text-center rounded-lg'>
        <h2 className='text-2xl font-bold mb-4'>Schedule an Appointment</h2>
        <p className='mb-4 text-xl'>Ready to take the next step in your health journey? Schedule an appointment with one of our specialists today.</p>
        <a href='/appointments'>
          <button className='bg-white text-dblue px-6 py-3 rounded-lg font-bold hover:bg-gray-100 text-xl'>
            Book Now
          </button>
        </a>
      </div>

   

      <div className='flex flex-wrap gap-4 justify-center p-4'>
        {countboxes.map((countbox, index) => (
          <div className='bg-white shadow-md rounded-lg flex flex-col items-center p-4 max-w-xs flex-1 min-w-[250px] flex-grow flex-shrink' key={index}>
            <img src={countbox.image} alt={countbox.service} className='w-20 h-20 mb-4' />
            <div className='flex flex-col items-center text-center'>
              <p className='text-3xl font-bold text-black text-lblue'>
                {countbox.number}<span className='text-3xl text-dgreen'>+</span>
              </p>
              <p className='text-xl font-bold text-lgray mt-2'>
                {countbox.service}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className='m-10 bg-shade'>
        <p className='text-4xl font-bold text-center mb-4 text-dblue'>Our Departments</p>
        <div className='flex flex-wrap gap-6 justify-center'>
          {selectedServices.map((service, index) => (
            <div className='flex flex-col bg-white shadow-md rounded-lg max-w-md p-4 justify-between items-center min-h-[150px] overflow-hidden' key={index}>
              <img
                src={serviceImageMap[service.name]}
                alt={service.name}
                className='w-20 h-20 object-cover rounded-full mb-4'
              />
              <h2 className='text-2xl font-bold mb-4 text-dgreen text-center'>{service.name}</h2>
              <p className='text-gray-700 text-lblue text-center'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='text-center mt-6'>
          <a href='/departments'>
            <button className='bg-white text-dblue px-6 py-3 rounded-lg font-bold hover:bg-gray-100 text-xl'>
              View More
            </button>
          </a>
        </div>
      </div>
  
      <div className='mt-16 p-6 bg-dindigo rounded-lg shadow-md'>
        <h2 className='text-3xl font-bold text-white text-center mb-6'>Reviews & Testimonials</h2>
        <div className='flex flex-wrap gap-6 justify-center'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-lg p-6 w-full max-w-md flex flex-col items-center shadow-sm'
            >
              <p className='text-lg mb-4 text-dgreen'>{review.description}</p>
              <p className='text-sm text-gray-600 italic'>{review.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
