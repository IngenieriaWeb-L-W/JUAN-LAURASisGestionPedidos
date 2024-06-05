import React from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '@/atoms/cart';
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  if (typeof window !== 'undefined') {
  }
  const { data: session, status } = useSession();
  const [cart] = useAtom(cartAtom);
  return (
    <div>
      <nav x-data='{ isOpen: false }' className='bg-white shadow dark:bg-gray-900'>
        <div className='container px-6 py-4 mx-auto'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex items-center justify-between'>
              <Link
                href='/'
                className='block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              >
                <img
                  className='w-auto h-6 sm:h-7'
                  src='https://merakiui.com/images/full-logo.svg'
                  alt=''
                />
              </Link>
              <div className='flex lg:hidden'>
                <button
                  type='button'
                  className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                  aria-label='toggle menu'
                >
                  <svg
                    x-show='!isOpen'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
                  </svg>

                  <svg
                    x-show='isOpen'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0'>
              <div className='-mx-4 lg:flex lg:items-center'>
                <Link
                  href='/checkout'
                  className='block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Checkout
                </Link>
                <Link
                  href='/admin'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Admin
                </Link>
                <Link
                  href='/products'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Products
                </Link>
                <Link
                  href='/contact'
                  className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                >
                  Contact
                </Link>
                <div>
                  {session ? (
                    <div>
                      <p className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>
                        {session.user?.name} - {session.user?.email}
                      </p>
                      <button
                        className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        signIn();
                      }}
                      className='block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                    >
                      Inicio Sesión
                    </button>
                  )}
                </div>

                <div className='text-4xl text-white font-bold'>{cart.length}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
