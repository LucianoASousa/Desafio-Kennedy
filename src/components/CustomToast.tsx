import { toast } from "react-toastify";
import { CgDanger } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { AiFillCheckCircle } from "react-icons/ai";


export default function CustomToast({ message, type, button } : { message: string,  type: string, button: string}){

  switch (type) {
    case 'success':
      return (
        <div className="bg-sucess w-full h-[168.67px] p-[15px] flex justify-center">
          <AiFillCheckCircle className=" text-white text-2xl" />
          <div className="flex flex-col justify-between items-start gap-2 ml-4 w-full">
            <h2 className="text-white font-bold text-sm">Este foi um sucesso total!</h2>
            <p className="text-white text-sm">{message}</p>
            <button
              className="mt-2 bg-[#E7FBF3] text-green-500 px-2 py-1 rounded font-semibold"
              onClick={()=> toast.dismiss()}
            >
              {button}
            </button>
          </div>
          <HiOutlineXMark className="text-white text-2xl font-bold cursor-pointer" onClick={()=> toast.dismiss()}/>
        </div>
      );
    case 'error':
      return (
        <div className="bg-error w-full h-[168.67px] p-[15px] flex justify-center">
          <CgDanger className=" text-white text-2xl" />
          <div className="flex flex-col justify-between items-start gap-2 ml-4 w-full">
            <h2 className="text-white font-bold text-sm">Acabou de acontecer um erro!</h2>
            <p className="text-white text-sm">{message}</p>
            <button
              className="mt-2 bg-[#FEEFEE] text-red-500 px-2 py-1 rounded font-semibold" 
              onClick={()=> toast.dismiss()}
            >
              {button}
            </button>
          </div>
          <HiOutlineXMark className="text-white text-2xl font-bold cursor-pointer" onClick={()=> toast.dismiss()}/>
        </div>
      );
    default:
      return (
        <div className="bg-error w-full h-[168.67px] p-[15px] flex justify-center">
          <CgDanger className=" text-white text-2xl" />
          <div className="flex flex-col justify-between items-start gap-2 ml-4 w-full">
            <h2 className="text-white font-bold text-sm">Acabou de acontecer um erro!</h2>
            <p className="text-white text-sm">{message}</p>
            <button
              className="mt-2 bg-[#FEEFEE] text-red-500 px-2 py-1 rounded font-semibold" 
              onClick={()=> toast.dismiss()}
            >
              {button}
            </button>
          </div>
          <HiOutlineXMark className="text-white text-2xl font-bold cursor-pointer" onClick={()=> toast.dismiss()}/>
        </div>
      );
  }
}