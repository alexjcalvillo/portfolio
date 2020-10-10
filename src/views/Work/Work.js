import React from 'react';
import ProjectLink from '../../components/ProjectLink/ProjectLink';

function Work() {
  return (
    <div className="container mx-auto px-4">
      <span className="text-6xl font-hairline">My name is Alex. </span>
      <div className="border-b border-gray-500 p-12 font-hairline text-gray-700">
        <h1 className="text-4xl">A few samples of my most recent work.</h1>
      </div>
      <div className="flex flex-col items-center justify-between mt-12">
        <ProjectLink
          ImageSource="images/innovatehershot.png"
          ProjectTitle="ConnectHER Application"
          Description="Pro-Bono Project: The InnovateHER KC community is transitioning from
            using a Facebook group to their own platform for a community space."
        />
        <ProjectLink
          ImageSource="images/findmytime.png"
          ProjectTitle="FindMyTime"
          Description="A tool to help you find the time in your schedule where you might normally say you are too 'busy' to do something.
                The calendar application breaks down the way you think about scheduling your time between routines, tasks, and habits."
        />
        <ProjectLink />
        <ProjectLink />
      </div>
    </div>
  );
}

export default Work;
