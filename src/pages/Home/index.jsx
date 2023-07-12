import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Services from './Services';
import CaseStudies from './CaseStudies';
import Brand from './Brand';
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
      <CaseStudies items={data.case_studies} />
      <Brand brandInformation={data.brand} />
      <Brand brandInformation={data.creativity} />
    </div>
  );
}

export default Home;
