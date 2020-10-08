import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="mt-20">
        <h2 className="text-4xl font-hairline">
          Hi, my name is Alex. I'm a Full Stack Developer from Kansas City, KS
          (yes, the one in Kansas).
        </h2>
      </div>
      <div className="overflow-hidden shadow">
        <img
          className="object-cover"
          src="./images/alex1_c-min.png"
          alt="headshot of myself, Alex"
        />
      </div>
      <br />
      <h3 className="text-xl pb-4">About:</h3>
      <p className="py-4 leading-loose font-light">
        I'm currently open to work immediately! My passion is in all things
        creative. Development has given me the ability to approach logic-based
        creativity I find extremely satisfying. You can see my professional
        details on my{' '}
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
        Outside of development I am an avid runner, shoot and edit videos, and
        play video and board games alike. I can ALWAYS eat more food and will
        try just about anything. I'm also open to freelancing just about
        anything creative and if you want to work together just reach out!
      </p>
      <br />
      <ContactForm />
    </div>
  );
}

export default About;
