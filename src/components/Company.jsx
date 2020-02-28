import React from 'react';
import PropTypes from 'prop-types';

function Company(props){
  return (
    <div>
    <h3>{props.name}</h3>
  </div>
  );
}

Company.propTypes = {
    name: PropTypes.string.isRequired,
    utility: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired
};

export default Company;