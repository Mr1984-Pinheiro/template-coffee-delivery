import { CompleteOrderform } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

export function CompleteOrderPage() {
  return (
    <form className="container mt-10 flex-col flex lg:flex-row justify-between gap-8">
      <CompleteOrderform />
      <SelectedCoffees />
    </form>
  );
}
