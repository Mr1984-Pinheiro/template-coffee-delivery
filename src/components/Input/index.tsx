import { InputHTMLAttributes } from "react"


type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }:InputProps){
    return(        
        <input className="h-[2.625rem] rounded-[4px] border border-base-button bg-base-input duration-[0.4s] 
        focus:border-brand-yellow-dark text-base-text text-xs py-0 px-3 placeholder:text-base-label" {...props}
        >
            
        </input>     
        
        
        
    )
}