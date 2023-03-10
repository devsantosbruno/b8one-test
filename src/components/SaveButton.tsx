import { Heart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { ProductProps } from "./Product";

export function SaveButton({
  id,
  productName,
  priceCurrently,
  productImage,
}: ProductProps) {
  const { favorites, setFavorites } = useContext(ShoppingCartContext);

  const isFavorited = favorites.some((item) => item.id === id);

  return (
    <button
      onClick={() => {
        const idsRemove = favorites.filter((item) => {
          return item.id !== id;
        });

        isFavorited
          ? setFavorites(idsRemove)
          : setFavorites([
              ...favorites,
              {
                id: id,
                productName: productName,
                priceCurrently: priceCurrently,
                productImage: productImage,
              },
            ]);
      }}
      className={`absolute right-0 top-0 p-2 rounded-full transition duration-200 ${
        isFavorited
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-gray-200 text-gray-900 hover:bg-pink-100 hover:text-red-500"
      }`}
    >
      <Heart size={32} weight={`${isFavorited ? "fill" : "thin"}`} />
    </button>
  );
}
