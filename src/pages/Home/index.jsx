import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Services from './Services';
import HomeData from '../../data/home_data.json';
import './style.css';

function Home() {
  const [data] = useState(HomeData);

  useEffect(() => {
    document.title = `Home - ${process.env.REACT_APP_APP_NAME}`;
  }, []);

  return (
    <div id="dv-home">
      <Banner
        title={data.header}
        description={data.description}
      />
      <Services items={data.services} />
    </div>
  );
}

export default Home;
