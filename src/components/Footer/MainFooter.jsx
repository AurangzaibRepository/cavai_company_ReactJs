import React, {useState, useEffect} from 'react';
import FooterService from '../../services/FooterService';

function MainFooter() {
  const [data, setData] = useState();

  const getData = async () => {
    const footerData = await FooterService.getData();
    setData(footerData);
  };

  return (
    <div id="dv-footer" className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default MainFooter;
