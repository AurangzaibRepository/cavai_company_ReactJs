import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import HomeData from '../../data/home_data.json';

function Home() {
  useEffect(() => {
    document.title = `Home - ${process.env.REACT_APP_APP_NAME}`;
  }, []);

  return (
  );
}

export default Home;
