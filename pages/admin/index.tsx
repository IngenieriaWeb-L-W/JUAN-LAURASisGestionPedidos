import Sidebar from '@/components/admin/sidebar';
import Table from '@/components/admin/table';
import React from 'react';
import PrivateLayout from '@/components/PrivateLayout';
import prisma from '@/config/prisma';

export const getServerSideProps = async () => {
  const countProducts = await prisma.product.count();
  return {
    props: {
      countProducts,
    },
  };
};

const Index = ({ countProducts = 0 }) => {
  return (
    <div>
      <PrivateLayout>
        {/* <Sidebar /> */}
        <Table countProducts={countProducts} />
      </PrivateLayout>
    </div>
  );
};

export default Index;