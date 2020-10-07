import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="text-3xl font-thin flex justify-between pt-1">
        <Link to="/">
          <span className="absolute h-12 w-12 -ml-1 border border-black px-1 transition duration-500 ease-in-out all hover: transform hover:rotate-90 cursor-pointer"></span>
          <span className="transition-none ml-px">AC</span>
        </Link>
        <div>
          <Link to="/" className="mr-3 hover:underline">
            Home
          </Link>
          <Link to="/work" className="mr-3 hover:underline">
            Work
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default connect(mapStoreToProps)(Nav);
