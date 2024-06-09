import React from 'react';
//import Checkout from '@/components/product/checkout';
import Checkout from '@/components/product/checkout';
import PrivateLayout from '@/components/PrivateLayout';


const Index = ({ product }: any) => {
  return (
    <div>
      <PrivateLayout>
        <Checkout  />
      </PrivateLayout>
    </div>
  );
};

export default Index;