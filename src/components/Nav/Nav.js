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

  if (props.store.pages === 'About') {
    linkData.path = '/work';
    linkData.text = 'Work';
  }

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.me}>Alex Calvillo</h1>
        {page === 'home' ? (
          <>
            <Link to="/work" onClick={() => clickWork('work')}>
              <p>Work</p>
            </Link>
            <Link to="/about" onClick={() => clickWork('about')}>
              <p>About</p>
            </Link>{' '}
          </>
        ) : (
          <>
            <Link to="/" onClick={() => clickWork('home')}>
              <p>Home</p>
            </Link>
            <Link to={linkData.path} onClick={() => clickWork(linkData.text)}>
              <p>{linkData.text}</p>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default connect(mapStoreToProps)(Nav);
