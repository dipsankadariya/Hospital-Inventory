import React from 'react';

function About() {
  return (
    <div className='bg-gray-100 py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-dblue mb-8'>About Us</h2>
        <div className='bg-white shadow-lg rounded-lg p-8'>
          <h3 className='text-2xl font-semibold mb-4'>Our Mission</h3>
          <p className='text-lg mb-6'>
            At Sagarmatha General Hospital, our mission is to provide compassionate, high-quality healthcare to all members of our community. We are committed to improving the health and well-being of our patients through exceptional medical care, innovative treatments, and patient-centered services.
          </p>
          
          <h3 className='text-2xl font-semibold mb-4'>Our Values</h3>
          <ul className='list-disc list-inside mb-6'>
            <li className='text-lg'>Compassion: We care deeply about our patients and their families, treating each person with empathy and kindness.</li>
            <li className='text-lg'>Integrity: We maintain the highest standards of professionalism, ethics, and honesty in all our interactions.</li>
            <li className='text-lg'>Excellence: We strive for excellence in every aspect of patient care and continuously seek to improve our services.</li>
            <li className='text-lg'>Innovation: We embrace new technologies and techniques to provide the most advanced and effective treatments.</li>
            <li className='text-lg'>Teamwork: We work collaboratively with our patients, families, and colleagues to achieve the best outcomes.</li>
          </ul>
          
          <h3 className='text-2xl font-semibold mb-4'>Our History</h3>
          <p className='text-lg mb-6'>
            Established in 2024, Sagarmatha General Hospital has been a cornerstone of healthcare in our community. Over the years, we have grown from a small clinic into a leading medical institution, expanding our services and facilities to meet the evolving needs of our patients.
          </p>
          
          <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
          <p className='text-lg mb-6'>
            For more information about our services or to schedule an appointment, please contact us at 000-0000 or contact@sagarmatha.edu.np. Our dedicated team is here to assist you with any questions or concerns you may have.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
