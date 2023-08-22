import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <Spinner
        as="span"
        variant="default"
        size="sm"
        role="status"
        aria-hidden="true"
        animation="border"/>
  );
}

export default Loader;