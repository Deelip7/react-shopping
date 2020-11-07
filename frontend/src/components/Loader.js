import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner animation='border' role='status' style={{ width: '150px', height: '150px', margin: '100px auto', display: 'block' }}>
      <span className='sr-only'>Loading</span>;
    </Spinner>
  );
};

export default Loader;
