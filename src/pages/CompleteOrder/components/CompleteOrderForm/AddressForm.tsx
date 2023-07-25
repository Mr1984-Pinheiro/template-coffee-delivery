import { Input } from "../../../../components/Input";

export function AddressForm(){
    const inputStyled = `h-[2.625rem] rounded-[4px] border border-base-button bg-base-input duration-[0.4s] 
    focus:border-brand-yellow-dark text-base-text text-xs py-0 px-3 placeholder:text-base-label`

    return(
        <div className="w-full grid grid-cols-8 grid-rows-4 grid-flow-dense gap-x-3 gap-y-4 ">
            <Input placeholder="CEP" type="number" className={`${inputStyled} col-span-8 max-w-[12.5rem]`} />
            <Input placeholder="Rua" className={`${inputStyled} col-span-8`} />
            <Input placeholder="Número" type="number" className={`${inputStyled} col-span-3`} />
            <Input placeholder="Complemento" className={`${inputStyled} col-span-5`}/>
            <Input placeholder="Bairro" className={`${inputStyled} col-span-3`} />
            <Input placeholder="Cidade" className={`${inputStyled} col-span-3 sm:col-span-4`} />
            <Input placeholder="UF" className={`${inputStyled} col-span-2 sm:col-span-1`}/>
        </div>
    )
}