import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-20 lg:flex justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-2xl lg:text-4xl font-hairline">
            I'm a Full Stack Developer from Kansas City, KS (yes, the one in
            Kansas). I'm a Software Engineer because I love the art of{' '}
            <span className="font-light">storytelling</span>. I see software
            engineering as an ability to be creative, tell stories, and connect
            people through those stories.
          </h2>
        </div>
        <div className="overflow-hidden rounded-full shadow lg:w-1/2">
          <img
            className="object-cover"
            src="./images/alex1_c-min.png"
            alt="headshot of myself, Alex"
          />
        </div>
      </div>
      <br />
      <div className="lg:flex mt-10 pt-10 border-t border-gray-400">
        <div className="lg:w-1/2">
          <h3 className="text-xl pb-4">About:</h3>
          <p className="leading-loose font-light">
            I'm currently open to work immediately! My passion is in all things
            creative. Development has given me the ability to approach
            logic-based creativity I find extremely satisfying. You can see my
            professional details on my{' '}
            <a
              className="cursor-pointer underline"
              href="https://www.linkedin.com/in/alexanderjcalvillo/"
            >
              LinkedIn
            </a>
            .
          </p>
          <br />
          <p className="py-4 font-light leading-loose">
            Outside of development I am an avid runner, shoot and edit videos,
            and play video and board games alike. I can ALWAYS eat more food and
            will try just about anything. I'm also open to freelancing just
            about anything creative and if you want to work together just reach
            out!
          </p>
        </div>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-thin">Want to work together?</h3>
          <p className="text-4xl font-hairline mb-4">Contact Me</p>
          <ContactForm />
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
