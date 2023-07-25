// import { QuantityInputContainer, IconWrapper } from "./styles";
// import { Minus, Plus } from "phosphor-react";

import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

// export function QuantityInput({
//   onIncrease,
//   onDecrease,
//   quantity,
//   size = "medium",
// }: QuantityInputProps) {
//   return (
//     <QuantityInputContainer size={size}>
//
//       <input type="number" readOnly value={quantity} />
//
//     </QuantityInputContainer>
//   );
// }

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
