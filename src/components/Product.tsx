import productImage from "../assets/product.png";
import { AddButton } from "../components/AddButton";
import { SaveButton } from "../components/SaveButton";

interface ProductProps {
  productName: string;
  priceOld: number;
  priceCurrently: number;
}

export function Product(props: ProductProps) {
  // to show amount in installments
  const amountInInstallments = (props.priceCurrently / 10).toFixed(2);

  // to get value with number and convert to string with dots and commas
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="bg-white p-8 max-w-[304px] rounded-lg flex flex-col justify-between hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.08)] transition duration-200">
      <div>
        <figure className="relative">
          <SaveButton />

          <img src={productImage} alt="" />
        </figure>

        <p className="text-gray-900 mb-6 font-medium text-sm mt-8">
          {props.productName}
        </p>
      </div>

      <div>
        <p className="text-gray-600 text-sm">
          {formatter.format(props.priceOld)}
        </p>
        <p className="text-red-500 text-2xl my-1">
          {formatter.format(props.priceCurrently)}
        </p>
        <p className="text-gray-700 text-xs font-medium">
          em até{" "}
          <span className="text-gray-900 font-medium">
            10x de R$ {amountInInstallments}
          </span>{" "}
          sem juros
        </p>

        <div className="mt-8">
          <AddButton />
        </div>
      </div>
    </div>
  );
}
