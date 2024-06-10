
import { ProductType } from "@/types";
import { atom } from "jotai";

const products = [
  {
    id: 18,
    name: 'VERY',
    price: 221,
    description:
      'Attention establish respond hundred future whom. Western baby now perform stuff wish.',
    image: 'https://dummyimage.com/133x631',
  },
  {
    id: 707,
    name: 'PER',
    price: 181,
    description:
      'Reach safe television control. Need information area weight impact test trade. From describe back these not marriage.',
    image: 'https://dummyimage.com/133x631',
  },
];

export const productsAtom = atom(products);
export const cartAtom = atom([]);

export const addToCartAtom = atom(null, (get, set, update: ProductType) => {
  const cart = get(cartAtom);
  const currentProduct: any = cart.find((product: ProductType) => product.id === update.id);

  if (!currentProduct) {
    set(cartAtom, [...cart, update]);
  } else {
    set(
      cartAtom,
      cart.map((product) => {
        if (product.id === currentProduct.id) {
          return { ...product, quantity: product.quantity + update.quantity };
        }
        return product;
      })
    );
  }
});



