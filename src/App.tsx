import { useContext, useEffect, useState } from "react";
import { Product } from "./components/Product";
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";

import mac from "./assets/mac.jpg";
import monitor from "./assets/monitor.png";

import "./styles/main.css";

export function App() {
  // setProducts for add products soon
  const [products, setProducts] = useState([
    {
      id: 1,
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      priceOld: 2813.99,
      priceCurrently: 2599.0,
      image: monitor,
    },
    {
      id: 2,
      productName:
        "Macbook Air Apple 13.3, Processador M1, 8GB, SSD 256GB, Space Grey - MGN63BZ/A",
      priceOld: 7684.2,
      priceCurrently: 6799.99,
      image: mac,
    },
  ]);

  const { saved, productCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    console.log("Saved ==> ", saved);
    console.log("Cart ==> ", productCart);
  }, [saved, productCart]);

  return (
    <div className="bg-[#E5E5E5] max-w-screen min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-8">
        {products.map((product) => {
          return (
            <Product
              id={product.id}
              productImage={product.image}
              productName={product.productName}
              priceOld={product.priceOld}
              priceCurrently={product.priceCurrently}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
