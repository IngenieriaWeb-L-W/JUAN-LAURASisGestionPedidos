import React, { useEffect, useState } from 'react';
import Card from './card';
import { useAtom } from 'jotai';
import { productsAtom, cartAtom } from '@/atoms/cart';
import { ProductType } from '@/types';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/utils/queries/products';

const Index = () => {
  // const [products] = useAtom(productsAtom);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useAtom(cartAtom);
  const { loading } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 10,
      skip: 0,
    },
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      setProducts(data.products);
    },
  });

  // const getProducts = async () => {
  //   await fetch('https://fakestoreapi.com/products').then(async (res) => {
  //     setProducts(await res.json());
  //   });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4 items-center justify-center'>
            {products.map((product: ProductType) => (
              <Card key={product.id} product={product} setCart={setCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
