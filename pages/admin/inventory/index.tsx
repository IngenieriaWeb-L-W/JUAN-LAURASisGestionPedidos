import PrivateLayout from '@/components/PrivateLayout';
import Table from '@/components/admin/table';
import React from 'react';
import prisma from '@/config/prisma';

export const getServerSideProps = async () => {
  const countProducts = await prisma.product.count();
  return {
    props: {
      countProducts,
    },
  };
};

const Index = ({ countProducts }: any) => {
  return (
    <div className='bg-gray-800'>
      <PrivateLayout>
        <Table countProducts={countProducts} />
      </PrivateLayout>
    </div>
  );
};

export default Index;
