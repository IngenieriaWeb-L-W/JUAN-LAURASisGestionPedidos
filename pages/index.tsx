/* eslint-disable react/function-component-definition */
import React from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Products from "@/components/home/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
    </div>
  );
}
