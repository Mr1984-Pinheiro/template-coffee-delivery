import { Button } from "../../../../components/Button";
import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeKartCard } from "../CoffeeKartCard";
import { ConfirmationSection } from "./ConfirmationSection";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col gap-3 lg:w-[28rem] w-full mr-auto ml-auto">
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <div className="w-full bg-base-card rounded-md p-10 rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px] rounded-br-[6px] flex flex-col">
        {cartItems.map((item) => (
          <CoffeeKartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />

        <Button text="Confirmar pedido" disabled />
      </div>
    </div>
  );
}
