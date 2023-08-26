import { InputHTMLAttributes, useState } from "react";

export default function Input({ error, ...rest }: InputHTMLAttributes<HTMLInputElement> & {
  error?:string[];
  }) {
const [isFocused, setIsFocused] = useState(false);
const errorMessage = error?.find((err) => err.includes(rest.name as string));
const isErrored = error?.some((err) => err.includes(rest.name as string));

  return (
  <div className="flex flex-col w-full">
    {isErrored ? (<div className="flex flex-col items-end w-full">
      <input
        className="border-[1px] border-[#F95E5A] bg-[#FEEFEE] text-[#F95E5A] placeholder-[#F95E5A]
        focus:outline-none w-full h-[40px] pl-[20px] focus:placeholder-[#F95E5A] rounded-[5px]"
        placeholder={isFocused ? "Focused..." : "Required..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <p className="text-[#F95E5A] text-sm mt-1" data-testid="error-message">{errorMessage}</p>
    </div>
      
    ) : (
      <input
        className="border-[1px] border-#EBEAED bg-[#F5F4F6] text-[#170C3A] placeholder-[#B1ADB9]
        focus:outline-none max-w-[900px] w-full h-[40px] pl-[20px] focus:placeholder-[#8F8A9B] rounded-[5px]"
        placeholder={isFocused ? "Focused..." : "Required..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />)
    }
  </div>
  )
}