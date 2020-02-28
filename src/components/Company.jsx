import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Company(props){
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

// function displayTimeAdded(timeAdded) {
//     return timeAdded.from(new Moment(), true);
//   }

Company.propTypes = {
  name: PropTypes.string.isRequired,
  utility: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
//   timeAdded: PropTypes.instanceOf(Moment).isRequired
};

export default Company;