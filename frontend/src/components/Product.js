import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating className='my-3' value={product.rating} text={`${product.numReviews} Reviews`}></Rating>
        </Card.Text>
        <Card.Text as='h4'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
