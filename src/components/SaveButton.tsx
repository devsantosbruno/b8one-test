import { Heart } from "phosphor-react";
import { useState } from "react";

export function SaveButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`absolute right-0 top-0 p-2 rounded-full transition duration-200 ${
        active
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-gray-200 text-gray-900 hover:bg-pink-100 hover:text-red-500"
      }`}
      onClick={() => setActive(!active)}
    >
      <Heart size={32} weight={`${active ? "fill" : "thin"}`} />
    </button>
  );
}
