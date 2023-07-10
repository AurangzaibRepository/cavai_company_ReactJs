import React, { useEffect } from 'react';
import HomeData from '../../data/home_data.json';

function Home() {
  useEffect(() => {
    document.title = `Home - ${process.env.REACT_APP_APP_NAME}`;
  }, []);

  return (
    <h1>Home</h1>
  );
}

export default Home;
