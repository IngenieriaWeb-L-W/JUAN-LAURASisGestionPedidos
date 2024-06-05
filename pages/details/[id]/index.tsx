import React from 'react';
import ProductDetails from '@/components/productdetails';
import axios from 'axios';
import { ProductType } from '@/types';
import { PrismaClient } from '@prisma/client';
import safeJsonStringify from 'safe-json-stringify';

export async function getServerSideProps(context: { params: { id: any } }) {
  const id = context.params.id;
  const prisma = new PrismaClient();
  const product = await prisma.product.findMany();
  return {
    props: {
      productServer: safeJsonStringify( product),
      id,
    },
  };
}

const Index = ({ id, productServer }: any) => {
  console.log('id', productServer);

  React.useEffect(() => {
    getProduct();
  }, []);

  const [product, setProduct] = React.useState<ProductType>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log('response', response);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {product && (
        <div>
          <ProductDetails product={product} />
        </div>
      )}
    </div>
  );
};

export default Index;
