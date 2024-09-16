import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex">
      <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white  flex justify-evenly items-center font-bold">
        <ul className="flex flex-col space-y-12  text-xl">
          <li><Link to="/Home" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/doctors" className="hover:text-gray-300">Doctors</Link></li>
          <li><Link to="/departments" className="hover:text-gray-300">Departments</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/appointments" className="hover:text-gray-300">Appointments</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          
        </ul>
      </nav>
      <main className="flex-1 ml-64 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar