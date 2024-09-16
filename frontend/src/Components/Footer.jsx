import React from 'react';

function Footer() {
  return (
    <footer className='bg-tea text-white py-8 shadow-md rounded-lg  mt-16'>
      <div className='container  flex flex-wrap  gap-16 px-4'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold'>Quick Links</h3>
          <p className='hover:text-gray-300 text-xl cursor-pointer'>About</p>
          <p className='hover:text-gray-300 text-xl cursor-pointer'>Doctors</p>
          <p className='hover:text-gray-300 text-xl cursor-pointer'>Technologies</p>
          <p className='hover:text-gray-300 text-xl cursor-pointer'>Departments</p>
          <p className='hover:text-gray-300 text-xl cursor-pointer'>Testimonials</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold'>Contact Us</h3>
          <p className='text-xl'>Birtamode, Jhapa</p>
          <p className='text-xl'>contact@sagarmathaGH.edu.np</p>
          <p className='text-xl'>000-0000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
