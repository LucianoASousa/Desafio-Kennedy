import { ImSpinner8 } from "react-icons/im";

export function Loading(){
  return(<main className="flex justify-center items-center h-screen">
    <ImSpinner8 className="animate-spin text-4xl text-[#365DF0]" data-testid="spinner-icon" />
  </main>)
}