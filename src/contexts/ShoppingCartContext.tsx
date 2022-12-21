import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../components/Product";

interface idCart {
  setCartProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  productsCart: ProductProps[];

  setFavorites: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  favorites: ProductProps[];
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as idCart);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [productsCart, setCartProducts] = useState<ProductProps[]>([]);
  const [favorites, setFavorites] = useState<ProductProps[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{ setCartProducts, productsCart, setFavorites, favorites }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
