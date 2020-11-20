import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keyword' content={keywords}></meta>
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: 'Welcome',
  description: 'We Sell Best Products',
  keywords: 'Electroincs',
};

export default Meta;
