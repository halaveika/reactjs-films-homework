import React from 'react';
import PropTypes from 'prop-types';
import './signature.scss';

export default function Signature({ name }) {
  return (
    <h2>{name}</h2>
  );
}

Signature.propTypes = {
  name: PropTypes.string,
};

Signature.defaultProps = {
  name: 'Aliaksandr Halaveika',
};
