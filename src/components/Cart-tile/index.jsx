import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice';

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };
  return (
    <>
      <div className='flex justify-center items-center p-5 bg-blue-300 mt-2 mb-2 rounded-xl'>
        <div className='flex flex-col justify-center items-center p-3 max-w-[300px]'>
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className='h-28 rounded-lg object-contain'
          />
          <div className='ml-10 self-start space-y-3 mt-4'>
            <h1 className='text-xl text-black font-bold'>{cartItem?.title}</h1>
            <p className='text-black font-extrabold'>{cartItem?.price}</p>
          </div>
          <button
            className='bg-red-900 text-white border-2 rounded-xl font-bold p-4'
            onClick={handleRemoveFromCart}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
