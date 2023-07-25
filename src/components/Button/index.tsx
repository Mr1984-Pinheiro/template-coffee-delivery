import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button
      className="py-3 px-11 rounded-md bg-brand-yellow font-bold text-white text-sm border-none mt-3 uppercase duration-[0.4s] leading-5 disabled:opacity-70 disabled:cursor-not-allowed enabled:hover:bg-brand-yellow-dark"
      {...props}
    >
      {text}
    </button>
  );
}
