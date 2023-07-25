import { PaymentMethodInput } from "../PaymentMethodInput";

export function PaymentMethodOptions() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-3">
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </div>
  );
}
