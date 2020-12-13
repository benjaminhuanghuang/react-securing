import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({ title }) => (
  <div className="jumbotron">
    <h1>{title}</h1>
    <p className="lead">Kickin it old school.</p>
  </div>
);

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Jumbotron;
