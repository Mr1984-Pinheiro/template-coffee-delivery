import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeKartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleDelete() {
    removeCartItem(coffee.id);
  }

  return (
    <div className="flex justify-between w-full items-center border-b border-solid border-base-button pb-6 mb-6">
      <div className="flex gap-5 items-center">
        <img className="w-16 h-16" src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <div className="flex mt-2 h-8 items-center gap-2 justify-center">
            <div className="max-w-[4.5rem]">
              <QuantityInput
                size="small"
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={coffee.quantity}
              />
            </div>
            <button
              onClick={handleDelete}
              className="flex items-center h-full font-[400] text-xs gap-1 text-base-text border-none bg-base-button px-2 rounded-md duration-[0.4s] hover:bg-base-hover"
            >
              <Trash size={16} className="text-brand-purple" />
              REMOVER
            </button>
          </div>
        </div>
      </div>

      <p className="font-bold self-start">{formattedPrice}</p>
    </div>
  );
}
