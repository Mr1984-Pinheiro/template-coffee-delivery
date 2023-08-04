import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && (
        <p className="text-red-400 text-[10px] col-span-3">
          {paymentMethodError}
        </p>
      )}
    </div>
  );
}
