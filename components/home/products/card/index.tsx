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
