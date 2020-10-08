import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputField from '../InputField/InputField';

const Contact = (props) => {
  const [email, setEmail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleInput = (key) => (event) => {
    setEmail({
      ...email,
      [key]: event.target.value,
    });
  };
  console.log(email);
  return (
    <div className="text-center mb-10">
      <h3 className="text-2xl font-thin">Want to work together?</h3>
      <p className="text-4xl font-hairline mb-4">Contact Me</p>
      <div className="flex flex-wrap justify-between lg:mx-auto lg:w-3/4">
        <div className="w-1/2 pr-2 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="h-4 w-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M41.6 31c4.5-3.1 7.4-8.2 7.4-14 0-9.4-7.6-17-17-17S15 7.6 15 17c0 5.8 2.9 10.9 7.4 14C13.5 33.8 7 42.2 7 52v12h50V52c0-9.8-6.5-18.2-15.4-21zM19 17c0-7.2 5.8-13 13-13s13 5.8 13 13-5.8 13-13 13-13-5.8-13-13zm34 43H11v-8c0-9.9 8.1-18 18-18h6c9.9 0 18 8.1 18 18v8z" />
            </svg>
          </div>
          <InputField
            placeholder="name"
            type="text"
            field={handleInput('name')}
          />
        </div>
        <div className="w-1/2 pl-2 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg
              className="h-4 w-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32v-4C16.6 60 4 47.4 4 32S16.6 4 32 4s28 12.6 28 28c0 4.2-.9 8.3-2.8 12.2-1.2 2.8-4.1 4.3-7 3.8-3.5-.7-5.8-4.1-5.1-7.6l4-21-4.1-.8-.7 3.5c-.5-.8-1.1-1.5-1.8-2.2-2.6-2.6-6-4-9.8-4-4.3 0-8.6 1.8-11.8 5-3 3-4.8 6.9-5 10.9-.2 4.1 1.2 7.9 3.9 10.7 2.6 2.6 6 4 9.8 4 4 0 8-1.6 11.1-4.4.2 4.7 3.6 8.9 8.5 9.8 4.8.9 9.5-1.6 11.4-6 2.1-4.4 3.2-9 3.2-13.9C64 14.4 49.6 0 32 0zm-2.2 42.5c-2.7 0-5.2-1-7-2.8-2-2-2.9-4.7-2.8-7.6.2-3 1.5-6 3.8-8.3 2.4-2.4 5.7-3.8 8.9-3.8 2.7 0 5.2 1 7 2.8 4.1 4.1 3.6 11.2-1.1 15.9-2.3 2.4-5.6 3.8-8.8 3.8z" />
            </svg>
          </div>
          <InputField
            placeholder="email"
            type="text"
            field={handleInput('email')}
          />
        </div>
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="h-4 w-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M0 10v44h64V10H0zm32 19.6L8.6 14h46.8L32 29.6zm-9.1-1.3L4 47.2V15.7l18.9 12.6zm3.4 2.3l5.7 3.8 5.7-3.8L57.2 50H6.8l19.5-19.4zm14.8-2.3L60 15.7v31.4L41.1 28.3z" />
            </svg>
          </div>
          <InputField
            placeholder="subject"
            type="text"
            field={handleInput('subject')}
          />
        </div>
        <div className="w-full">
          <textarea
            className="w-full h-56 my-2 py-3 px-4 rounded"
            placeholder="Testing placeholder props"
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

export default connect()(Contact);
