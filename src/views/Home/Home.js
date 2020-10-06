import React from 'react';

function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 pt-8 z-10">
        <div className="overflow-hidden px-4 col-span-3 lg:col-span-1 lg:ml-10 z-20">
          <img
            className="object-cover rounded-full"
            src="./images/alex1_c-min.png"
            alt="headshot of myself, Alex"
          />
        </div>
        <div className="col-span-3 px-4 lg:col-span-2 z-20">
          <p className="text-2xl pt-12 lg:text-6xl font-thin lg:-m-20 lg:pt-32 lg:w-11/12 ">
            Hi, I'm Alex. I'm a Software Engineer because I love the art of{' '}
            <span className="font-light">storytelling</span>. I see software
            engineering as an ability to be creative, tell stories, and connect
            people through those stories.
          </p>
        </div>
        <div className="absolute inset-y-0 bottom-0 right-0 z-0 h-auto w-3/5 border rounded border-gray-500 mt-24 mr-48"></div>
      </div>
      {/* <div>
        More content goes here.
        <p className="text-6xl">
          More content goes here. More content goes here. More content goes
          here. More content goes here. More content goes here. More content
          goes here. More content goes here. More content goes here. More
          content goes here. More content goes here. More content goes here.
        </p>
      </div> */}
    </div>
  );
}

export default Home;
