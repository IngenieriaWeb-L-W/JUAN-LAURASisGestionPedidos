import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '@/atoms/cart';
import useFormData from '@/hooks/useFormData';

const Index = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const total = cart.reduce((acc: any, item: any) => acc + item.price, 0);
  const { form, formData, updateFormData } = useFormData({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12'>
      <div className='col-span-9 lg:col-span-8 xl:col-span-9 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12'>
        <p>
          <svg
            className='inline'
            width='6'
            height='10'
            viewBox='0 0 6 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5 1L1 5L5 9'
              stroke='#4B5563'
              strokeWidth='1.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='cursor-pointer text-gray-500 font-normal text-base ml-2.5'>Back</span>
        </p>
        <h3 className='font-semibold text-gray-800 text-4xl mt-2'>Checkout</h3>

        <div className='mt-7 lg:mt-20'>
          <p className='font-normal text-sm text-gray-600 mb-3'>Your details</p>
          <h3 className='text-2xl text-gray-800 font-medium'>Enter your details</h3>

          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={handleSubmit}
            className='mt-8'
            autoComplete='off'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
              <input
                aria-label='emailAddress'
                className='border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none'
                type='email'
                name='email'
                required
                id='email'
                placeholder='Email address'
              />
              <input
                aria-label='yourName'
                className='border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none'
                type='text'
                name='Nombre'
                id='YourName'
                placeholder='Your name'
              />
              <input
                aria-label='phoneNumber'
                className='border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none'
                type='text'
                name='phoneNumber'
                id='phoneNumber'
                placeholder='Phone Number'
              />
            </div>
            <button
              type='submit'
              className='bg-gray-800 hover:bg-gray-900 text-white p-4 text-lg my-3 mt-10 w-full md:w-auto'
            >
              Proceed to shipping
            </button>
            <button
              type='reset'
              className='bg-red-600 hover:bg-gray-900 text-white p-4 text-lg my-3 mt-10 w-full md:w-auto'
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <div className='relative col-span-9 lg:col-span-4 xl:col-span-3 bg-gray-100 lg:h-auto xl:h-screen px-8 py-14 xl:px-12 xl:py-20'>
        <div className='flex flex-1'>
          <h3 className='text-gray-800 font-semibold text-2xl'>Items</h3>
          <div className='flex-auto'></div>
          <h5 className='text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline'>
            Edit Cart
          </h5>
        </div>
        {cart.map((product: any) => (
          <div key={product.id} className='mt-7 flex flex-1 text-gray-800 text-lg font-normal'>
            <h3>{product.name}</h3>
            <h3 className='flex-auto text-right pr-4 md:pr-5 lg:pr-4'>1x</h3>
            <h3>${product.price}</h3>
            <button
              type='button'
              onClick={() => {
                setCart((currentCart: any) =>
                  currentCart.filter((item: any) => item.id !== product.id)
                );
              }}
              className='mx-5'
            >
              <i className='iconify text-gray-800' data-icon='material-symbols:delete' />
            </button>
          </div>
        ))}
        <div className='-bottom-7 px-8 xl:px-12 pb-5 md:-bottom-96 bg-gray-100 md:pt-80 md:pb-10 lg:pb-10 lg:pt-0 lg:mt-0 lg:bottom-0 absolute left-0 w-full text-lg font-medium text-gray-800'>
          <span aria-label='Total' className='float-left text-2xl text-gray-800 font-normal'>
            Total
          </span>
          <span
            aria-label='Total Price'
            className='float-right font-semibold text-gray-800 text-2xl'
          >
            ${total}
          </span>
          <div className='clear-both'></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
