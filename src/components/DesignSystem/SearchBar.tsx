import { ChangeEvent} from "react";
import {TfiSearch} from 'react-icons/tfi'

export default function SearchBar({onChange}: {onChange: (e: ChangeEvent<HTMLInputElement>) => void}) {
  return (
    <div className="flex items-center justify-center relative max-w-[403px] w-full">
      <TfiSearch className="text-[#B1ADB9] absolute left-[15px]"/>
      <input  
      className="border-[1px] border-#EBEAED bg-[#F5F4F6] text-[#170C3A] placeholder-[#B1ADB9]
      focus:outline-none w-full h-[50px] pl-[20px] focus:placeholder-[#8F8A9B] rounded-[5px] text-center" 
      placeholder="Digite o procurado…" 
      onChange={onChange}
      />
    </div>
  );
}