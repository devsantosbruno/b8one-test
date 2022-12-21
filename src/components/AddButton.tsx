import { Check } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { ProductProps } from "./Product";

export function AddButton({
  id,
  productName,
  priceCurrently,
  productImage,
}: ProductProps) {
  const { productsCart, setCartProducts } = useContext(ShoppingCartContext);

  const isAdded = productsCart.some((item) => item.id === id);

  return (
    <button
      onClick={() => {
        const idsRemove = productsCart.filter((item) => {
          return item.id !== id;
        });

        isAdded
          ? setCartProducts(idsRemove)
          : setCartProducts([
              ...productsCart,
              {
                id: id,
                productName: productName,
                priceCurrently: priceCurrently,
                productImage: productImage,
              },
            ]);
      }}
      className={`w-full font-bold p-3 rounded-[5px] flex items-center justify-center gap-4 ${
        isAdded
          ? "bg-green-100 text-gray-900"
          : "bg-green-400 text-white hover:bg-green-600 transition duration-200"
      } `}
    >
      <div className={`${isAdded ? "visible" : "hidden"}`}>
        <Check size={24} className="text-gray-900" />
      </div>
      {isAdded ? "ADICIONADO" : "ADICIONAR"}
    </button>
  );
}
