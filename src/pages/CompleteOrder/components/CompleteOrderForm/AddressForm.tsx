import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const inputStyled = `h-[2.625rem] rounded-[4px] border border-base-button bg-base-input duration-[0.4s] 
    focus:border-brand-yellow-dark text-base-text text-xs py-0 px-3 placeholder:text-base-label`;

  return (
    <div className="w-full grid grid-cols-8 grid-flow-dense gap-x-3 gap-y-4 ">
      <Input
        placeholder="CEP"
        type="number"
        className={`${inputStyled} col-span-8 max-w-[12.5rem]`}
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className={`${inputStyled} col-span-8`}
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        className={`${inputStyled} col-span-3`}
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className={`${inputStyled} col-span-5`}
        {...register("complement")}
        error={errors.complement?.message}
      />
      <Input
        placeholder="Bairro"
        className={`${inputStyled} col-span-3`}
        {...register("district")}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        className={`${inputStyled} col-span-3 sm:col-span-4`}
        {...register("city")}
      />
      <Input
        placeholder="UF"
        className={`${inputStyled} col-span-2 sm:col-span-1`}
        {...register("uf")}
      />
    </div>
  );
}
