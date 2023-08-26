import { createContext, useCallback, useState } from "react";
import { iTools } from "../interface/tools";
import api from "../utils/axios";
import { toast } from "react-toastify";
import CustomToast from "../components/CustomToast";
import { AxiosError } from "axios";

export const ToolsContext = createContext<{
  tools: iTools[];
  toolsFiltered: iTools[];
  addTools: (data: Omit<iTools, "id">) => void;
  getToolsByTag : (tag: string) => void;
  getToolsById : (id: string) => void;
  deleteToolsById : (id: string) => void;
  getTools : () => void;
}>({
  tools: [],
  toolsFiltered: [],
  addTools: () => {},
  getToolsByTag: () => {},
  getToolsById: () => {},
  deleteToolsById: () => {},
  getTools: () => {},
});

export function ToolsProvider({ children }: { children: JSX.Element }) {
  const [tools, setTools] = useState<iTools[]>([]);
  const [toolsFiltered, setToolsFiltered] = useState<iTools[]>(tools);

  const getTools = useCallback(async () => {

    const token : string | null = localStorage.getItem('@token');
    
    try {
      const response = await api.get("/tools", {headers: {Authorization: `Bearer ${token}`}});
      const { data } = response as { data: iTools[] };
      setTools(data);
      setToolsFiltered(data);
    } catch (error) {
      const { response } = error as AxiosError;
      if(response?.status === 401){
        toast(
          <CustomToast
            message="Token expirado faça logout e login novamente"
            type="error"
            button="Tentar novamente"
          />
        );
        return;
      }
      toast(
        <CustomToast
          message={(error as { message: string }).message}
          type="error"
          button="Tentar novamente"
        />
      );
      }
  }, []);
  
  const getToolsByTag = (tag: string) => {
    const filteredTools = tools.filter((tool) =>
      tool.tags.some((tags) => tags.toLowerCase().includes(tag.toLowerCase())
    ));
    if(filteredTools.length === 0){
      toast(
        <CustomToast
          message="Nenhuma ferramenta encontrada"
          type="error"
          button="Tentar novamente"
        />
      );
    }
    setToolsFiltered(filteredTools);
  }

const addTools = useCallback(async (data: Omit<iTools, "id">) => {

    const token : string | null = localStorage.getItem('@token');

    try {
      const response = await api.post("/tools", data, {headers: {Authorization: `Bearer ${token}`}});
      const { data: newTools } = response as { data: iTools };
      setTools((oldTools) => [...oldTools, newTools]);
      setToolsFiltered((oldTools) => [...oldTools, newTools]);
      toast(
        <CustomToast
          message="Ferramenta adicionada com sucesso"
          type="success"
          button="Continuar"
        />
      );
    } catch (error) {
        toast(
          <CustomToast
            message={(error as { message: string }).message}
            type="error"
            button="Tentar novamente"
          />
        );
      }
  }, []);

  const getToolsById = useCallback(async (id: string) => {
    
    const token : string | null = localStorage.getItem('@token');
    
    try {
      const response = await api.get(`/tools/${id}`, {headers: {Authorization: `Bearer ${token}`}});
      const { data } = response;
      setTools(data);
    } catch (error) {
      toast(
        <CustomToast
          message={(error as { message: string }).message}
          type="error"
          button="Tentar novamente"
        />
      );
    }
  }, []);

  const deleteToolsById = useCallback(async (id: string) => {
    
    const token : string | null = localStorage.getItem('@token');

    try {
      await api.delete(`/tools/${id}`, {headers: {Authorization: `Bearer ${token}`}});
      const newTools = tools.filter((tool) => tool.id !== id);
      setTools(newTools);
      setToolsFiltered(newTools);
      toast(
        <CustomToast
          message="Ferramenta deletada com sucesso"
          type="success"
          button="Continuar"
        />
      );
      
    } catch (error) {
      toast(
        <CustomToast
          message={(error as { message: string }).message}
          type="error"
          button="Tentar novamente"
        />
      );
    }
  }, [tools]);
  

  return (
    <ToolsContext.Provider
      value={{
        tools,
        toolsFiltered,
        getToolsByTag,
        addTools,
        getToolsById,
        deleteToolsById,
        getTools,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
}