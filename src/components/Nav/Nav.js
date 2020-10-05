import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import styles from './Nav.module.css';

const Nav = (props) => {
  console.log(props);
  const [page, setPage] = useState('');

  const clickWork = (route) => {
    const routeSent = route.toUpperCase();
    props.dispatch({
      type: `SET_${routeSent}`,
      payload: route,
    });
    setPage(route);
  };

  let linkData = {
    path: '/about',
    text: 'About',
  };

  if (page === 'about') {
    linkData.path = '/work';
    linkData.text = 'Work';
  }

  return (
    <header>
      <nav className={styles.nav}>
        <h1 style={{ fontWeight: '300', fontSize: '2.2em' }}>Alex Calvillo</h1>
        {page === 'home' ? (
          <>
            <Link to="/work" onClick={() => clickWork('work')}>
              Work
            </Link>
            <Link to="/about" onClick={() => clickWork('about')}>
              About
            </Link>{' '}
          </>
        ) : (
          <>
            <Link to="/" onClick={() => clickWork('home')}>
              Home
            </Link>
            <Link to={linkData.path} onClick={() => clickWork(linkData.text)}>
              {linkData.text}
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default connect(mapStoreToProps)(Nav);
