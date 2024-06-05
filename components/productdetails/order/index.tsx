import React from 'react';

function Index() {
  return (
    <>
      <div className='bg-gray-800/50'>
        <div className='py-12 px-4'>
          <div className='mx-auto py-12 lg:px-10 md:px-6 px-4 lg:max-w-[1440px] bg-white md:max-w-[744px] max-w-[375px]'>
            <div className='max-w-[842px] w-full mx-auto'>
              <div>
                <p className='lg:text-4xl text-3xl font-semibold text-center text-gray-800'>
                  Thank you!
                  <br />
                  Your Order has been received
                </p>
                <p className='text-base text-center text-gray-600 mt-4'>
                  We will send you a confirmation email once your order is shipped.
                </p>
                <div className='bg-gray-50 mx-auto mt-9 py-6'>
                  <p className='text-2xl font-semibold leading-normal text-gray-800 px-6'>
                    Order details
                  </p>
                  <div className='flex justify-between mt-6 px-6'>
                    <p className='text-base text-gray-600'>Order number</p>
                    <p className='text-base font-medium text-gray-800'>XYZ-024-997</p>
                  </div>
                  <div className='flex justify-between mt-6 px-6'>
                    <p className='text-base text-gray-600'>Date</p>
                    <p className='text-base font-medium text-gray-800'>22-02-2022</p>
                  </div>
                  <div className='flex justify-between mt-6 px-6'>
                    <p className='text-base text-gray-600'>Payment method</p>
                    <p className='text-base font-medium text-gray-800'>Credit card</p>
                  </div>
                  <hr className='mt-6' />
                  <div className='md:block hidden'>
                    <div className='flex flex-col items-end w-full'>
                      <div className='flex gap-[165px] mt-6 px-6'>
                        <p className='text-base text-gray-600'>Subtotal</p>
                        <p className='text-base font-medium text-gray-800'>$3500</p>
                      </div>
                      <div className='flex justify-between gap-[208px] mt-6 px-6'>
                        <p className='text-base text-gray-600'>VAT</p>
                        <p className='text-base font-medium text-gray-800'>$170</p>
                      </div>
                      <div className='flex gap-[185px] mt-6 px-6'>
                        <p className='text-base font-semibold text-gray-800'>Total</p>
                        <p className='text-base font-semibold text-gray-800'>$3670</p>
                      </div>
                    </div>
                  </div>
                  <div className='md:hidden block'>
                    <div className='flex justify-between mt-6 px-6'>
                      <p className='text-base text-gray-600'>Subtotal</p>
                      <p className='text-base font-medium text-gray-800'>$3500</p>
                    </div>
                    <div className='flex justify-between mt-6 px-6'>
                      <p className='text-base text-gray-600'>VAT</p>
                      <p className='text-base font-medium text-gray-800'>$170</p>
                    </div>
                    <div className='flex justify-between mt-6 px-6'>
                      <p className='text-base font-semibold text-gray-800'>Total</p>
                      <p className='text-base font-semibold text-gray-800'>$3670</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-9 bg-gray-50 py-6 px-6'>
                <p className='text-2xl font-semibold leading-normal text-gray-800'>Products</p>
                <div className='flex justify-between'>
                  <div className='flex gap-4 mt-6'>
                    <div>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/cddew.png'
                        className='md:block hidden'
                      />
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/kkjjnnbb.png'
                        className='md:hidden block'
                      />
                    </div>
                    <div>
                      <p className='text-base text-gray-600 md:block hidden'>
                        Amazon Beat Box A-48 High Sound Speaker
                      </p>
                      <p className='text-base font-medium text-gray-800 lg:mt-4 mt-0'>
                        Delivery time : 4-5 days
                      </p>
                      <p className='text-base font-semibold text-gray-800 mt-2 lg:hidden md:block block'>
                        $70
                      </p>
                    </div>
                  </div>
                  <div className='lg:mt-6 mt-3 lg:block md:hidden hidden'>
                    <p className='text-base font-semibold text-gray-800'>$70</p>
                  </div>
                </div>
                <p className='text-base text-gray-600 md:hidden block mt-4'>
                  Amazon Beat Box A-48 High Sound Speaker
                </p>
                <div className='flex justify-between mt-8'>
                  <div className='flex gap-4 mt-6'>
                    <div>
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/bxcsd.png'
                        alt=''
                        className='md:block hidden'
                      />
                      <img
                        src='https://tuk-cdn.s3.amazonaws.com/can-uploader/ppmg.png'
                        alt=''
                        className='md:hidden block'
                      />
                    </div>
                    <div>
                      <p className='text-base text-gray-600 md:block hidden'>
                        Luxe Sports A-48 Sneakers collection
                      </p>
                      <p className='text-base font-medium text-gray-800 lg:mt-4 mt-0'>
                        Delivery time : 4-5 days
                      </p>
                      <p className='text-base font-semibold text-gray-800 mt-2 lg:hidden md:block block'>
                        $70
                      </p>
                    </div>
                  </div>
                  <div className='lg:mt-6 mt-3 lg:block md:hidden hidden'>
                    <p className='text-base font-semibold text-gray-800'>$70</p>
                  </div>
                </div>
                <p className='text-base text-gray-600 md:hidden block mt-4'>
                  Luxe Sports A-48 Sneakers collection
                </p>
              </div>
              <div className='md:mt-9 mt-8 py-6 px-6 md:flex justify-between'>
                <div>
                  <p className='text-xl font-medium leading-tight text-gray-800'>
                    Customer details
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Phone:
                    <span className='text-base font-medium text-gray-600' />
                    053-566-908
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Email :
                    <span className='text-base font-medium text-gray-600'>Shopall@gmail.com</span>
                  </p>
                  <p className='text-xl font-medium leading-tight text-gray-800 mt-6'>
                    Bank details
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Credit card
                    <span className='text-base font-medium text-gray-800'>******0978</span>
                  </p>
                </div>
                <div className='md:mt-0 mt-6'>
                  <p className='text-xl font-medium leading-tight text-gray-800'>
                    Customer details
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Phone:
                    <span className='text-base font-medium text-gray-600' />
                    053-566-908
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Email :
                    <span className='text-base font-medium text-gray-600'>Shopall@gmail.com</span>
                  </p>
                  <p className='text-xl font-medium leading-tight text-gray-800 mt-6'>
                    Bank details
                  </p>
                  <p className='text-base text-gray-600 mt-4'>
                    Credit card
                    <span className='text-base font-medium text-gray-800'>******0978</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
