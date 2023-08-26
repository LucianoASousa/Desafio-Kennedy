import AddModal from "../components/AddModal";

export default {
  title: "Component/AddModal",
  component: AddModal,
  argTypes: {
    closeModal: { action: "closeModal" },
    afterOpenModal: { action: "afterOpenModal" },
  }
};
    
export const Main = (args : any) => <AddModal {...args} />;
Main.args = {
  isOpen: true,
  closeModal: () => {},
  afterOpenModal: () => {},
};

