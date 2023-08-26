import { LabelHTMLAttributes } from "react";

export default function Label({ error,children, ...rest }: LabelHTMLAttributes<HTMLLabelElement> & {
  error?:string[];
  }) {
    const isErrored = error?.some((err) => err.includes(rest.htmlFor as string));

    return(
    <>
      {
        isErrored ? (
          <label className="text-[#170C3A] font-semibold mt-1" {...rest}>{children}<span className="text-[#F95E5A]"> *</span></label>
        ) : (
          <label className="text-[#170C3A] font-semibold mt-1" {...rest}>{children}<span className="text-[#170C3A]]"> *</span></label>
        )
      }
    </>
    )
  }