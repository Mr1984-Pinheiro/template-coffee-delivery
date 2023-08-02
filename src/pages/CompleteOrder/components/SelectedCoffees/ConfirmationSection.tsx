import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formatteddeliveryPrice = formatMoney(DELIVERY_PRICE);
  const formattedCartTotal = formatMoney(cartTotal);

  return (
    <section className="flex flex-col gap-3 mb-3">
      <div className="flex justify-between items-center">
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div className="flex justify-between items-center">
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatteddeliveryPrice}</RegularText>
      </div>
      <div className="flex justify-between items-center">
        <RegularText weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button text="Confirmar pedido" disabled={cartQuantity <= 0} />
    </section>
  );
}
