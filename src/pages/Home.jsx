import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductCard from '../components/Product-Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className='min-h-screen w-full flex justify-center items-center'>
          <Circles height={'120'} width={'120'} color='red' visible={true} />
        </div>
      ) : (
        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto p-3 '>
           {
            products?.length > 0 ? products.map(productItem => <ProductCard product={productItem}/>) : null
           }
        </div>
      )}
    </div>
  );
};

export default Home;
