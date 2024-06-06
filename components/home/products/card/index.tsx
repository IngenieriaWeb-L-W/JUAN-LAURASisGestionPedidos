import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import the Image component from next/image

const Index = ({ product, setCart }: any) => {
  const router = useRouter();
  return (
    <div>
      <div className='max-w-xs overflow-hidden my-4 mx-2 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div className='px-4 py-2'>
          <h1 className='text-xl font-bold text-gray-800 uppercase dark:text-white'>
            {product.title}
          </h1>
          <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{product.description}</p>
        </div>

        <Image // Replace <img> with <Image>
          onClick={() => router.push(`/details/${product.id}`)} // Wrap the onClick event in an arrow function
          className='object-cover w-full h-48 mt-2'
          src={product.image}
          alt={product.title}
          width={320}
          height={192} // Add the width and height props
        />

        <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
          <h1 className='text-lg font-bold text-white'>{product.price}</h1>
          <button
            onClick={() => {
              setCart((currentCart: any) => [...currentCart, product]);
            }}
            className='px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

/* import React from 'react';
import Rating from '../rating';
import { useRouter } from 'next/router';

interface ProductTypes {
  product: {
    id: number;
    title: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
    image: string;
    price: number;
    category: string;
  };
}

const Index = ({ product }: ProductTypes) => {
  const router = useRouter();
  return (
    <div
      key={product.id}
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
    >
      <div className='flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
        <div
          className='w-1/3 bg-cover'
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>

        <div className='w-2/3 p-4 md:p-4'>
          <h1 className='text-xl font-bold text-gray-800 dark:text-white'>{product.title}</h1>

          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>{product.description}</p>

          <Rating rating={product?.rating?.rate ?? 0} />

          <div className='flex justify-between mt-3 item-center'>
            <h1 className='text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl'>
              ${product.price}
            </h1>
            <button className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index; */