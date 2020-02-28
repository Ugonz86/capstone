import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
  return (
    <div>
      <Link to="/companylist">Company List</Link>
    </div>
  );
}

export default Home;