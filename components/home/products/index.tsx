import React, { useState } from "react";
import Card from "./card";
import { useAtom } from "jotai";
//import { productsAtom } from '@/atoms/cart';
import { useQuery } from '@apollo/client';

import { GET_PRODUCTS } from "@/utils/graphql/queries/products";

type product = {
  id: number;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  price: number;
  category: string;
};

const Index = () => {
  const [products, setProducts] = useState<product[]>([]);
  const { loading } = useQuery(GET_PRODUCTS, {
    variables: {
      take: 10, //cantidad de product
      skip: 0,
    },
    fetchPolicy: "cache-and-network", //toma de datos de product
    onCompleted: (data) => {
      setProducts(data.products);
      console.log("data :>> ", data);
    },
  });
  // const [products] = useAtom(productsAtom);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <section className="text-gray-600 body-font bg-white shadow dark:bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-5 justify-center items-center">
            {products.map((product: product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
