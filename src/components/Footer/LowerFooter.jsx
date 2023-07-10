import React from 'react';

function LowerFooter() {
  const year = new Date().getFullYear();

  return (
    <div id="dv-subfooter" className="d-flex justify-content-center">
      <div className="text-center">
        <div className="color-white pb-2">
          Privacy Policy | Terms of use
        </div>
        <div id="dv-copyright" className="pt-2">
          Copyright ©
          {` ${year} `}
          Cavai, All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
