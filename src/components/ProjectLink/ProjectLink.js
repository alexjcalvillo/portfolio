import React from 'react';

import './ProjectLink.module.css';
function ProjectLink({ ProjectTitle, Description, ImageSource }) {
  return (
    <div className="mb-24 lg:w-1/2">
      <div className="flex flex-col items-center">
        <img
          className="rounded-md z-0 shadow-md"
          src={ImageSource}
          alt="project still"
        />
        <div className="relative -mt-20 shadow-lg z-10 rounded-lg bg-gray-100 w-11/12 p-3 flex flex-col items-center">
          <span className="text-2xl text-gray-700 font-light antialiased tracking-wide">
            {ProjectTitle}
          </span>
          <span className="w-5/6 text-gray-700 font-thin tracking-wide text-xs lg:text-base mt-4">
            {Description}
          </span>
          <button className="w-5/6 my-4 py-2 border-2 border-gray-400 rounded-md m-auto transition-all duration-500 hover:bg-gray-400 hover:text-white">
            See Project
            <svg
              className="w-5 h-5 fill-current inline pb-1 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path d="M40.2 58.3l-2.9-2.6L56.5 34H0v-4h56.5L37.3 8.3l2.9-2.6L63.7 32z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectLink;
