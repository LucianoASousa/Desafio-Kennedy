import { iTools } from "../interface/tools";
import { Button, CardMain } from "./DesignSystem";
import { HiOutlineXMark } from "react-icons/hi2";
import uuid from 'react-uuid';

export function CardTool({title, link, description, tags, handleDelete} : iTools &{
  handleDelete: () => void;
}) {
  return (
    <CardMain>
      <div className="flex justify-between items-center">
        <a href={link}><h1 className="text-lg font-bold underline">{title}</h1></a>
        <Button styles="danger" onClick={handleDelete}>
            <HiOutlineXMark className="text-white" />
          Deletar
          </Button>
      </div>
      <p className="text-sm text-[#170C3A] mt-2">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags?.map((tag) => (
          <span key={uuid()} className="text-sm text-white bg-[#F95E5A] rounded-[13px] px-2 py-1">{`#${tag}`}</span>
        ))}
      </div>
    </CardMain>
  );
}