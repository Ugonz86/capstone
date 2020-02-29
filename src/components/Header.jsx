import React from 'react';
import { Link } from 'react-router-dom';

var headerStyle = {
  // display: 'flex',
  // position: 'inline',
  textAlign: 'center',
  padding: '20px',
  verticalAlign: 'middle',
};

function Header(){
  return (
    <div style={headerStyle}>
      <nav>
        <style jsx global>{`
        a {
          letter-spacing: 5px;
          
          color: #333;
          text-decoration: none !important;
        }
        a:hover, a:active, a:focus {
          text-decoration: none !important;
          color: blue ;
        }
        `}</style>
        <Link to="/">Home</Link> &nbsp;&nbsp; <Link to="/CompanyList">Companies</Link> &nbsp;&nbsp; <Link to="account">Account</Link>
      </nav>
      <h1><b style={{color: 'blue', fontStyle: 'italic'}}>e</b>Bills</h1>
      <hr/>
    </div>
  );
}

export default Header;