/* eslint-disable import/no-default-export */
import React from "react";
import Card from "./card";
import { useAtom } from "jotai";
import { productsAtom } from "@/atoms/cart";

const Index = () => {
  const [products] = useAtom(productsAtom);

  return (
    <div>
      <section className="text-gray-600 body-font bg-white shadow dark:bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-5 justify-center items-center">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
