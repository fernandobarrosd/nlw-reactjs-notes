/* eslint-disable react/prop-types */
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>


export function Input({ className, ...props } : InputProps) {
    return (
        <input 
        className={`bg-transparent placeholder:text-slate-500
        border-b-2 pb-8 border-slate-700 w-full text-slate-500 
        font-inter font-semibold lg:text-3xl outline-none
        text-2xl
         ${className ?? ""}`}
        {...props}/>
    );
}