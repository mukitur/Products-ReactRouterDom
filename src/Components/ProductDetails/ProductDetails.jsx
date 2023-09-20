import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  const { title, images, description, brand, stock, price } = product;
  //   console.log(product);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className=" flex flex-col md:flex-row gap-6 mt-12 mx-auto max-w-6xl">
      <div>
        <img src={images[0]} alt="" />
        <h2 className="text-center mt-3 font-bold">Product Name: {title}</h2>
        <button
          onClick={handleNavigate}
          className="bg-green-500 px-4 py-2 rounded-md w-full   my-3 text-white"
        >
          Shop more
        </button>
      </div>
      <div>
        <h2>Price: {price}</h2>
        <h3>Brand: {brand}</h3>
        <h3>Product Description: {description}</h3>
        <h5>Stock: {stock}</h5>
        <button className="bg-blue-500 px-4 py-2 rounded-md w-1/3 my-3 text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
