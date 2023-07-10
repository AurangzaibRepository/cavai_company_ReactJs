import React, { useState } from 'react';
import Label from '../Label';
import UnorderedList from '../UnorderedList';
import footerData from '../../data/footer_data.json';

function MainFooter() {
  const [data] = useState(footerData.data);

  return (
    <div id="dv-footer" className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Label
              value={item.header}
              classIdentifier="label-category"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainFooter;
