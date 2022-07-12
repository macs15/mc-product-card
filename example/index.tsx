import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  // img: './coffee-mug.png',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 5,
      }}
    >
      {({ reset }) => (
        <>
          <ProductImage />
          <ProductTitle title="taza de café" />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
