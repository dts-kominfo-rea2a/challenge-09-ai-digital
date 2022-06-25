// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="isi">
        <h1 className="header-title">Call a Friend</h1>
        <p className="header-subtitle">your friendly contact app</p>
        <p className="header-dot">
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
          &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226; &#8226;
        </p>
      </div>
    </div>
  );
};

export default Header;
