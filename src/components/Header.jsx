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
        <Link to="/">Home</Link> | <Link to="/companyList">Company List</Link>
        
      </nav>
      <h1><em>e</em>Bills</h1>
    </div>
  );
}

export default Header;