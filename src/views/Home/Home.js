import React from 'react';

function Home() {
  return (
    <div className="container mx-4 mt-12 mb-40">
      <div className="mt-40">
        <h2 className="text-3xl font-hairline">
          I specialize in Frontend Development:
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div class="w-full lg:w-4/12 bg-gray-200 rounded-md shadow-md p-4 ">
            <p className="text-2xl font-thin tracking-wider">Technologies:</p>
            <ul>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                React
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                Redux/Redux-Saga
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                JavaScript
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                HTML/CSS
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
            </ul>
          </div>
          <div className="lg:w-4/12 bg-gray-200 rounded-md shadow-md p-4">
            <p className="text-2xl font-thin tracking-wider">Skills</p>
            <ul>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                React
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                Redux/Redux-Saga
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                JavaScript
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                HTML/CSS
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
            </ul>
          </div>
          <div class="lg:w-4/12 bg-gray-200 rounded-md shadow-md p-4">
            <p className="text-2xl font-thin tracking-wider">Skills</p>
            <span className="font-thin tracking-wide">Technology:</span>
            <ul>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                React
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                Redux/Redux-Saga
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2 animate-pulse">
                JavaScript
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2">
                HTML/CSS
              </li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
              <li className="text-xs border-transparent rounded-full bg-gray-700 py-2 text-gray-100 px-3 my-4 w-1/2"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
