/* eslint-disable import/no-default-export */
import React from 'react';

type RatingTypes = {
  rating: number;
};

const Index = ({ rating }: RatingTypes) => {
  return (
    <div className='flex mt-2 item-center'>
      <svg
        className={`w-5 h-5 ${
            rating < 1 ? 'text-gray-500' : 'text-yellow-400'
        } fill-current`}
        viewBox='0 0 24 24'
      >
        <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
      </svg>

      <svg
        className={`w-5 h-5 ${
            rating < 2 ? 'text-gray-500' : 'text-yellow-400'
        } fill-current `}
        viewBox='0 0 24 24'
      >
        <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
      </svg>

      <svg
        className={`w-5 h-5 ${
            rating < 3 ? 'text-gray-500' : 'text-yellow-400'
        } fill-current `}
        viewBox='0 0 24 24'
      >
        <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
      </svg>

      <svg
        className={`w-5 h-5 ${
            rating < 4 ? 'text-gray-500' : 'text-yellow-400'
        } fill-current `}
        viewBox='0 0 24 24'
      >
        <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
      </svg>

      <svg
        className={`w-5 h-5 ${
            rating < 5 ? 'text-gray-500' : 'text-yellow-400'
        } fill-current `}
        viewBox='0 0 24 24'
      >
        <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
      </svg>
    </div>
  );
};

export default Index;