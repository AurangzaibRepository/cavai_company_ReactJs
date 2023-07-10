import React, { useState, useEffect } from 'react';
import Label from '../Label';
import FooterService from '../../services/FooterService';

function MainFooter() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const footerData = await FooterService.getData();
    setData(footerData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="dv-footer" className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4" key={item.id}>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFooter;
