import { TextareaHTMLAttributes, useState } from "react";

export default function TextArea({error,...rest} : TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?:string[];
  }) {
  const [isFocused, setIsFocused] = useState(false);
  const errorMessage = error?.find((err) => err.includes(rest.name as string));
  const isErrored = error?.some((err) => err.includes(rest.name as string));

  return (
    <>
    {isErrored ? (
      <div className="flex flex-col w-full items-end">
      <textarea
        className="border-[1px] border-[#F95E5A] bg-[#FEEFEE] text-[#F95E5A] placeholder-[#F95E5A]
        focus:outline-none w-full h-[180px] pl-[20px] focus:placeholder-[#F95E5A] rounded-[5px]"
        placeholder={isFocused ? "Focused..." : "Required..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      <p className="text-[#F95E5A] text-sm mt-1">{errorMessage}</p>
    </div>
    ) : (
      <textarea
        className="border-[1px] border-#EBEAED bg-[#F5F4F6] text-[#170C3A] placeholder-[#B1ADB9]
        focus:outline-none w-full h-[180px] pl-[20px] focus:placeholder-[#8F8A9B] rounded-[5px]"
        placeholder={isFocused ? "Focused..." : "Required..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />)
    }
  </>
  )
}