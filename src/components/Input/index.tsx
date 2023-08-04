import { InputHTMLAttributes, forwardRef } from "react";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <input
          className="h-[2.625rem] rounded-[4px] border border-base-button bg-base-input duration-[0.4s] 
        focus:border-brand-yellow-dark text-base-text text-xs py-0 px-3 placeholder:text-base-label"
          {...props}
          ref={ref}
        ></input>
        {error && (
          <p className={`col-span-8 text-red-400 text-[10px] -mt-2 `}>
            {error}
          </p>
        )}
      </>
    );
  }
);
