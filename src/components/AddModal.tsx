import { useTools } from "../hooks/contexts";
import { HiOutlineXMark } from "react-icons/hi2";
import { Button, Input, Label } from "./DesignSystem";
import Modal from "react-modal";
import TextArea from "./DesignSystem/TextArea";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  title: yup.string().required(),
  link: yup.string().required(),
  description: yup.string().max(256).required(),
  tags: yup.string().required(),
});

export default function AddModal({ isOpen, closeModal, afterOpenModal}: {
  isOpen: boolean,
  closeModal: () => void,
  afterOpenModal?: () => void,
}) {
  const { addTools } = useTools();
  const [error , setError] = useState(['']);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const title = data.get('title') as string;
    const link = data.get('link') as string;
    const description = data.get('description') as string;
    const tags = data.get('tags') as string;

    
   try{
    schema.validateSync({
      title,
      link,
      description,
      tags,
    }, { abortEarly: false })
    addTools({
      title,
      link,
      description,
      tags: tags.split(',')
    })
    closeModal();
   }
    catch(err){
      const yupErrors = err as yup.ValidationError;
      setError(yupErrors.errors);
    }
  }

  return(
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="bg-white rounded-[5px] max-w-[900px] w-full h-fit shadow-modal border-[1px] flex flex-col justify-between p-[30px]"
      overlayClassName="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center"
    >
      <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Adicionar Ferramenta</h2>
          <HiOutlineXMark
            className="text-[#8F8A9B] font-extrabold text-2xl cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col gap-2 mt-4 w-full">
            <Label htmlFor="title" error={error}>Título</Label>
            <Input
              type="text"  
              name="title"
              id="title"
              placeholder="Ex: Notion"
              error={error}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full">
          <Label htmlFor="link" error={error}>Link</Label>
            <Input
              type="text"
              name="link"
              id="link"
              placeholder="Ex: https://notion.so"
              error={error}
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-4">
          <Label htmlFor="description" error={error}>Descrição</Label>
          <TextArea
            name="description"
            id="description"
            placeholder="Ex: Todos os seus pensamentos, projetos e anotações em um só lugar."
            error={error}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4 w-full">
          <Label htmlFor="tags" error={error}>Tags</Label>
          <Input
            type="text"
            name="tags"
            id="tags"
            placeholder="Ex: organization, planning"
            error={error}
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button styles="neutral" type="submit">Salvar</Button>
        </div>
      </form>
    </Modal>
  )
}
