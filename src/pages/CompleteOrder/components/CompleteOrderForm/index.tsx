import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderform() {
  const sectionBaseStyle = `w-full bg-base-card rounded-md p-10`;

  return (
    <div className="flex flex-col gap-3 lg:w-[40rem] flex-1">
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <div className={`${sectionBaseStyle} flex flex-col gap-8`}>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine className="text-brand-yellow-dark" size={22} />}
        />

        <AddressForm />
      </div>

      <div className={`${sectionBaseStyle} flex flex-col gap-8`}>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar className="text-brand-purple" size={22} />}
        />

        <PaymentMethodOptions />
      </div>
    </div>
  );
}
