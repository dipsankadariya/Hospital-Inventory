import React from 'react';
import Footer from './Footer';
function Home() {

  const countboxes = [
    { service: "Consultation", number: "10000", image: "images/consultation.png" },
    { service: "Surgeries", number: "2000", image: "images/surgery.png" },
    { service: "Angiography", number: "800", image: "images/angiography.png" },
    { service: "Radiology", number: "1200", image: "images/radiology.png" }, 
    { service: "Pathology", number: "1500", image: "images/pathology.png" }, 
    { service: "Emergency Cases", number: "5000", image: "images/emergency.png" }
  
  ]
  const reviews = [
    { name: 'anonymous', description: "The staff at Sagarmatha General Hospital is always helpful and caring." },
    { name: "anonymous", description: "Excellent medical services and compassionate care." },
    { name: "anonymous", description: "Wonderful experience at Sagarmatha General Hospital. The staff was supportive and the care was exceptional" },
    { name: "anonymous", description: "I was impressed by the doctors' thoroughness and genuine concern for my well-being. Their expertise was evident and reassuring." }
  ];

  return (
    <div className='bg-shade'>
    <div className='mb-20'>
      <h1 className="text-4xl font-bold text-dblue mb-16 text-center">Welcome to Sagarmatha General Hospital.</h1>
      <p className="mt-2 text-xl text-dgray text-center text-start">
        We provide caring and expert healthcare to keep you healthy. Our skilled team is here to help with all your medical needs. Your health is our top priority.
      </p>
      <p className='mt-2 text-xl text-dgray text-star'>
        Sagarmatha General Hospital, established in 2024, stands as a beacon of advanced healthcare in the heart of Birtamode, Jhapa. Our state-of-the-art facility is dedicated to delivering exceptional medical care with compassion and expertise. Equipped with cutting-edge technology and a team of highly skilled professionals, we offer a comprehensive range of services to meet the diverse needs of our community. From routine consultations to complex surgeries, our commitment is to provide top-quality care in a comfortable and welcoming environment. At Sagarmatha General Hospital, your health and well-being are our top priorities.
      </p>
    </div>
    

    <div className='mt-16 mb-16 p-6 bg-dindigo text-white text-center rounded-lg'>
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





      

      <div className='mt-16 p-6 bg-teal rounded-lg shadow-md'>
        <h2 className='text-3xl font-bold text-white text-center mb-6'>Reviews & Testimonials</h2>
        <div className='flex flex-wrap gap-6 justify-center'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='bg-gray-50 rounded-lg p-6 w-full max-w-md flex flex-col items-center shadow-sm'
            >
              <p className='text-lg mb-4 text-dgray'>{review.description}</p>
              <p className='text-sm text-gray-600 italic'>{review.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
    

  );
}

export default Home;
