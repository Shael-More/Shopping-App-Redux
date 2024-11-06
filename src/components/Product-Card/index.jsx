// to use the actions define in cart slice in other components- b using useDispatch hook from react-redux

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';
const ProductCard = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div>
      <div className='group flex-col justify-center items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl max-w-[300px]'>
        <div className='h-[180px]'>
          <img
            src={product?.image}
            alt={product?.title}
            className='h-full w-full object-contain '
          />
        </div>

        <div>
          <h1 className='w-40 truncate mt-3 text-gray-800 font-bold text-lg'>
            {product?.title}
          </h1>
        </div>
        <div className='flex items-center justify-center w-ful;l mt-5'>
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCard
            }
            className='bg-red-900 text-white border-2 rounded-lg p-3 font-bold'
          >
            {cart.some((item) => item.id === product.id)
              ? 'Remove from cart'
              : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
