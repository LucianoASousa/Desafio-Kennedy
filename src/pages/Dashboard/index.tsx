import { CardTool } from "../../components/CardTool";
import { useAuth, useTools } from "../../hooks/contexts";
import { Button, SearchBar, DangerModal } from "../../components/DesignSystem";
import { useEffect, useState } from "react";
import { iTools } from "../../interface/tools";
import AddModal from "../../components/AddModal";
import { HiOutlinePlus } from "react-icons/hi2";

export default function Dashboard() {
  document.title = "Dashboard";

  const [selectedTool, setSelectedTool] = useState<iTools>({} as iTools);
  const { logout } = useAuth();
  const { getToolsByTag, toolsFiltered, deleteToolsById, getTools } = useTools();
  const [isOpenDanger, setIsOpenDanger] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  useEffect(() => {
    getTools()
  }, []);

  function handleDelete(tool: iTools) {
    setSelectedTool(tool);
    setIsOpenDanger(true);
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white text-zinc-950 p-8">
      <div className="flex flex-col items-start justify-center gap-4 break-words py-4 max-w-[800px] w-full">
        <h1 className="text-4xl font-bold">FEMAQUA</h1>
        <h3 className="text-2xl font-bold">Ferramentas Maravilhosas que Adoro</h3>
      </div>
      <DangerModal
        handleDanger={() => deleteToolsById(selectedTool.id)}
        isOpen={isOpenDanger}
        afterOpenModal={() => {}}
        closeModal={() => setIsOpenDanger(false)}
        title={`Remover ${selectedTool.title}?`}
        description="Você tem certeza que quer remover essa ferramenta?"
        />
        <AddModal
        isOpen={isOpenAdd}
        afterOpenModal={() => {}}
        closeModal={() => setIsOpenAdd(false)}
        />
      <div className="max-w-[800px] w-full h-full flex flex-col items-center justify-start overflow-hidden ">
        <div className="flex justify-between w-full gap-2">
          <SearchBar onChange={(e) => getToolsByTag(e.target.value)}/>
          <Button styles="success" onClick={()=> setIsOpenAdd(true)} data-testid="add"><HiOutlinePlus className="text-white text-xl"/>Novo</Button>
        </div>
        <div className="flex flex-wrap justify-center mt-4 gap-2 overflow-auto w-full">
          {toolsFiltered?.map((tool) => (
            <CardTool key={tool.id} {...tool} handleDelete={() => handleDelete(tool)} />
          ))}
        </div>
      </div>
      <button onClick={logout} className="mt-4 text-sm text-zinc-950 underline">Logout</button>
    </main>
  );
}