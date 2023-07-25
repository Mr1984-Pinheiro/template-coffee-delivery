import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";

export function CoffeeKartCard() {
  return (
    <div className="flex justify-between w-full items-center border-b border-solid border-base-button pb-6 mb-6">
      <div className="flex gap-5 items-center">
        <img className="w-16 h-16" src="#" />
        <div>
          <RegularText color="subtitle">Expresso tradicional</RegularText>
          <div className="flex mt-2 h-8 items-center gap-2 justify-center">
            <div className="max-w-[4.5rem]">
              <QuantityInput size="small" />
            </div>
            <button className="flex items-center h-full font-[400] text-xs gap-1 text-base-text border-none bg-base-button px-2 rounded-md duration-[0.4s] hover:bg-base-hover">
              <Trash size={16} className="text-brand-purple" />
              REMOVER
            </button>
          </div>
        </div>
      </div>

      <p className="font-bold self-start">R$ 9,90</p>
    </div>
  );
}
