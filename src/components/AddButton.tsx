import { Check } from "phosphor-react";
import { useState } from "react";

export function AddButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`w-full font-bold p-3 rounded-[5px] flex items-center justify-center gap-4 ${
        active
          ? "bg-green-100 text-gray-900"
          : "bg-green-400 text-white hover:bg-green-600 transition duration-200"
      } `}
    >
      <div className={`${active ? "visible" : "hidden"}`}>
        <Check size={24} className="text-gray-900" />
      </div>
      {active ? "ADICIONADO" : "ADICIONAR"}
    </button>
  );
}
