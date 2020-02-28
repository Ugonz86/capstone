import React from 'react';
import { Link } from 'react-router-dom';
import Company from './Company';
import PropTypes from 'prop-types';
// import Moment from 'moment';

var masterCompanyList = [
  {
    name:'Seattle Light',
    utility:'Electricity',
    contact:'www.seattle.com',
    timeAdded:''
  },
  {
    name:'Seattle Water',
    utility:'Water',
    contact:'www.seattle.com',
    timeAdded:''
  },
  {
    name:'Seattle Farm',
    utility:'Insurance',
    contact:'www.seattle.com',
    timeAdded:''
  },
  {
    name:'Seattle Auto',
    utility:'Car Dealer',
    contact:'www.seattle.com',
    timeAdded:''
  },
  {
    name:'Seattle Fi',
    utility:'Internet',
    contact:'www.seattle.com',
    timeAdded:''
  },
    
];

// function displayTimeAdded(timeAdded) {
//     return timeAdded.from(new Moment(), true);
//   }

function CompanyList(props){
  return (
    <div>
      <hr/>
      {props.companyList.map((company) =>
        <Company
          name={company.name}
          utility={company.utility}
          contact={company.contact}
          timeAdded={company.timeAdded}
          key={company.id}/>
      )}
      <Link to='/newticket'>Create Ticket</Link>
    </div>
  );
}

CompanyList.propTypes = {
  companyList: PropTypes.array,
};

export default CompanyList;