import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <Link to={'/'}>
          <div className='ml-5'>
            <h1 className='text-red-500 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide'>
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className='flex list-none items-center text-gray-800 space-x-6 font-semibold'>
          <Link to={'/'}>
            <li className='cursor-pointer mr-5'>Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className='cursor-pointer mr-5'>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
