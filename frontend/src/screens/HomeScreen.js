import React from 'react';
import products from '../products';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product._id}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
