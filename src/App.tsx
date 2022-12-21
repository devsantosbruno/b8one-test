import { useState } from "react";
import { Product } from "./components/Product";

import "./styles/main.css";

export function App() {
  // setProducts for add products soon
  const [products, setProducts] = useState([
    {
      productName:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      priceOld: 2813.99,
      priceCurrently: 2599.0,
    },
    {
      productName: "Monitor BENQ",
      priceOld: 3493.99,
      priceCurrently: 2979.5,
    },
  ]);

  return (
    <div className="bg-[#E5E5E5] max-w-screen min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-8">
        {products.map((product) => {
          return (
            <Product
              productName={product.productName}
              priceOld={product.priceOld}
              priceCurrently={product.priceCurrently}
              key={product.productName}
            />
          );
        })}
      </div>
    </div>
  );
}
