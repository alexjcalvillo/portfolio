import React, { useState } from 'react';

const Contact = (props) => {
  const [email, setEmail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleInput = (key) => (event) => {
    setEmail({
      [key]: event.target.value,
    });
  };
  console.log(email);
  return (
    <div className="text-center mb-10">
      <h3 className="text-2xl font-thin">Want to work together?</h3>
      <p className="text-4xl font-hairline mb-4">Contact Me</p>
      <div className="flex flex-wrap justify-between">
        <div className="w-1/2 pr-2">
          <input
            className="w-full px-4 py-2 border rounded"
            id="name"
            type="text"
            placeholder="name"
            onChange={handleInput('name')}
          />
        </div>
        <div className="w-1/2 pl-2">
          <input
            className="w-full px-4 py-2 border rounded"
            id="email"
            type="text"
            placeholder="email address"
            onChange={handleInput('email')}
          />
        </div>
        <div className="w-full my-2">
          <input
            className="px-4 py-2 w-full border rounded"
            id="subject"
            placeholder="subject"
            onChange={handleInput('subject')}
          />
        </div>
        <div className="w-full">
          <textarea
            className="px-4 py-2 border rounded w-full h-56"
            id="message"
            placeholder="type a message here..."
            onChange={handleInput('message')}
          />
        </div>
        <button className="bg-gray-600 border border-gray-600 w-full rounded py-2 px-4 hover:bg-gray-500">
          <span className="text-white">SEND IT</span>
        </button>
      </div>
    </div>
  );
};

export default Contact;
