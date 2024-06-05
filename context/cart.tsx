import { createContext, useContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addProductToCart: (product: CartItem) => void;
  setCart: (cart: CartItem[]) => void;
  removeProductFromCart: (product: number) => void;
  clearCart: () => void;
  isInCart: (product: CartItem) => void;
  getCartTotal: () => void;
  getCartItemsCount: () => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProductToCart = (product: any) => {
    setCart((currentCart) => [...currentCart, product]);
  };
  const removeProductFromCart = (product: any) => {
    const newCart = cart.filter((item: any) => item.id !== product.id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (product: any) => {
    return cart.some((item: any) => item.id === product.id);
  };
  const getCartTotal = () => {
    return cart.reduce((acc: any, item: any) => acc + item.price, 0);
  };
  const getCartItemsCount = () => {
    return cart.reduce((acc: any, item: any) => acc + 1, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        isInCart,
        getCartTotal,
        getCartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
