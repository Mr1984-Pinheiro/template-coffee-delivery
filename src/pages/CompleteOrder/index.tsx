import { FormProvider, useForm } from "react-hook-form";
import { CompleteOrderform } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

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
