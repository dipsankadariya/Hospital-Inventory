import React from 'react';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "55509243-c457-4fa7-bdfc-b403fa6a81e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div>
      <h2 className='text-3xl font-bold mb-6 text-center'>Contact Us</h2>
   
    <div className='max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg'>
     
      <form onSubmit={onSubmit} className='space-y-4'>
        <div>
          <label className='block text-sm font-medium mb-2' htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            required
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-2' htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            placeholder='Your Message'
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            rows='5'
            required
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors'
        >
          Submit Form
        </button>
      </form>
    </div>
    </div>
  );
}

export default Contact;