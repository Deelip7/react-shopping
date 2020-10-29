import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <h2>{product.name}</h2>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
