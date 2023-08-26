import { HiOutlineXMark } from 'react-icons/hi2';
import Modal from 'react-modal';
import { Button } from '.';

export default function DangerModal({
  afterOpenModal,
  closeModal,
  isOpen,
  title,
  description,
  handleDanger,
}: {
  afterOpenModal: () => void,
  closeModal: () => void,
  isOpen: boolean,
  title: string,
  description: string,
  handleDanger: () => void,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="bg-white rounded-[5px] max-w-[400px] w-full h-[332px] shadow-modal border-[1px] flex flex-col justify-between p-[30px]"
      overlayClassName="fixed inset-0 bg-[#000000] bg-opacity-50 flex justify-center items-center"
    >
      <div className='flex justify-between items-center'>
        <h2 className="text-lg font-bold break-all max-w-[300px]">{title}</h2>
        <HiOutlineXMark className="text-[#8F8A9B] font-extrabold text-2xl cursor-pointer" onClick={closeModal} />
      </div>
      <p className="text-sm text-[#8F8A9B] mt-2">{description}</p>
      <div className="flex justify-end gap-2">
        <Button styles="danger" onClick={()=> {handleDanger(), closeModal()}}>Danger</Button>
      </div>

    </Modal>
  );
}
