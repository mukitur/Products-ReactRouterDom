import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
  const { id, title, price, brand, images, stock } = product;
  return (
    <div>
      <img className="w-full h-64 my-6" src={images[0]} alt="" />
      <h2 className="flex-grow">Name: {title}</h2>
      <p>Brand: {brand}</p>
      <div className="flex flex-colls justify-between">
        <p>Price: {price}</p>
        <p>Quantity {stock} </p>
      </div>
      <Link to={`/product/${id}`}>
        {' '}
        <button className="bg-blue-500 px-4 py-2 rounded-md w-full my-3 text-white">
          Details
        </button>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.array,
};

export default Product;
