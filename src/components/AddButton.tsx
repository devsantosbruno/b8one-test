import { Check } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { ProductProps } from "./Product";

export function AddButton({ id, productName, priceCurrently }: ProductProps) {
  const { productCart, setCartProducts } = useContext(ShoppingCartContext);

  const addOrNot = productCart.some((item) => item.id === id);

  return (
    <button
      onClick={() => {
        const idsRemove = productCart.filter((item) => {
          return item.id !== id;
        });

        addOrNot
          ? setCartProducts(idsRemove)
          : setCartProducts([
              ...productCart,
              {
                id: id,
                productName: productName,
                priceCurrently: priceCurrently,
              },
            ]);
      }}
      className={`w-full font-bold p-3 rounded-[5px] flex items-center justify-center gap-4 ${
        addOrNot
          ? "bg-green-100 text-gray-900"
          : "bg-green-400 text-white hover:bg-green-600 transition duration-200"
      } `}
    >
      <div className={`${addOrNot ? "visible" : "hidden"}`}>
        <Check size={24} className="text-gray-900" />
      </div>
      {addOrNot ? "ADICIONADO" : "ADICIONAR"}
    </button>
  );
}
