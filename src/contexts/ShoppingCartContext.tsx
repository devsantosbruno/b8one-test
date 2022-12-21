import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../components/Product";

interface idCart {
  setCartProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  productCart: ProductProps[];

  setSaved: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  saved: ProductProps[];
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as idCart);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [productCart, setCartProducts] = useState<ProductProps[]>([]);
  const [saved, setSaved] = useState<ProductProps[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{ setCartProducts, productCart, setSaved, saved }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
