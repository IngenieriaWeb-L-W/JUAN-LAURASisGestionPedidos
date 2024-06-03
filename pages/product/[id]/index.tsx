import Details from "@/components/product/details";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { productsAtom } from "@/atoms/cart";
import axios from "axios";
//import { productType } from '@types/global';
import { productType } from "@/types/global";
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const prisma = new PrismaClient();
  return {
    props: { id },
  };
}

const Index = ({ id }: {id: string }) => {
  const [products] = useAtom(productsAtom);
  const [productDetails, setProductDetails] = useState<productType>({
    id: "0",
    title: "",
    description: "",
    rating: {
      rate: 0,
      count: 0,
    },
    image: "",
    price: 0,
    category: "",
  });

  const getProduct = async (id: number) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetails(response.data);
    } catch (error) {
      //eslint-disable-line no-console
      console.log("error", error);
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
