import { CreditCard } from "phosphor-react";

export function PaymentMethodInput() {
  return (
    <div className="flex justify-start text-base-text text-xs uppercase rounded-md h-12 border border-solid border-base-button duration-[.4s] hover:bg-base-hover select-none items-center gap-3 py-0 px-4 bg-base-button">
      <CreditCard size={16} className="text-brand-purple" />
      Cartão de crédito
    </div>
  );
}
