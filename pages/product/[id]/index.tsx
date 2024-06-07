import Details from '@/components/productdetails/products';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { productsAtom } from '@/atoms/cart';
import axios from 'axios';
import { ProductType } from '@/types/index';
import { PrismaClient } from '@prisma/client';

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const prisma = new PrismaClient();
  return {
    props: { id },
  };
}

const Index = ({ id }: any) => {
  const [products] = useAtom(productsAtom);
  const [productDetails, setProductDetails] = useState<ProductType>({
    id: 0,
    title: '',
    description: '',
    rating: {
      rate: 0,
      count: 0,
    },
    image: '',
    price: 0,
    category: {
      name: '',
      description: '',
      id: 0,}
  });

  const getProduct = async (id: number) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <div>
      <Details product={productDetails} />
    </div>
  );
};

export default Index;

/* import Products from '@/components/productdetails/products';
import React from 'react';

const Index = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Index;
 */
