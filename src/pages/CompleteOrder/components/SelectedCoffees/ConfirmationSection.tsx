import { RegularText } from "../../../../components/Typography";

export function ConfirmationSection() {
  return (
    <section className="flex flex-col gap-3 mb-3">
      <div className="flex justify-between items-center">
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
      <div className="flex justify-between items-center">
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div className="flex justify-between items-center">
        <RegularText weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle">
          R$ 29,90
        </RegularText>
      </div>
    </section>
  );
}
