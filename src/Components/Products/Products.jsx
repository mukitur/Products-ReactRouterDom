import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      <h2 className="text-3xl text-center my-10 ">
        Total Products: {products.length}
      </h2>
      <div className="grid grid-colls md:grid-cols-4 mx-8 gap-6 p-4 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
