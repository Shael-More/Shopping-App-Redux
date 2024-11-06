import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/Cart-tile';

// useSelector will give you the updated state from our redux store
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div>
      {cart?.length > 0 ? (
        <>
          <div className='min-h-[80vh] grid sm:grid-cols-2 max-w-6xl mx-auto'>
            <div className='flex flex-col justify-center items-center p-3'>
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
            <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14'>
              <h1 className='text-red-800 text-lg font-bold'>
                Your cart summary
              </h1>
              <p>
                <span className='text-gray-800 font-bold'>Total Item: </span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className='text-gray-800 font-bold'>Total Amount: </span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className='min-h-[80vh] flex flex-col items-center justify-center'>
          <h1 className='text-xl text-gray-800 font-bold mb-2'>
            Your cart is empty
          </h1>
          <Link to={'/'}>
            <button className='bg-red-900 text-white border-2 rounded-lg p-3 font-bold'>
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
