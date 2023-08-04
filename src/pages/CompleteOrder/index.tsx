import { FormProvider, useForm } from "react-hook-form";
import { CompleteOrderform } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

export function CompleteOrderPage() {
  return (
    <FormProvider {...confirmOrderForm}>
      <form
        className="container mt-10 flex-col flex lg:flex-row justify-between gap-8"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderform />
        <SelectedCoffees />
      </form>
    </FormProvider>
  );
}
