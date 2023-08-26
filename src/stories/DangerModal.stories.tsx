import { DangerModal } from '../components/DesignSystem/';

export default {
  title: "Design System/DangerModal",
  component: DangerModal,
  argTypes: {
    afterOpenModal: {
      action: "afterOpenModal",
    },
    closeModal: {
      action: "closeModal",
    },
    handleDanger: {
      action: "handleDanger",
    },
  },
};

export const Main = (args : any) => <DangerModal {...args} />;
Main.args = {
  isOpen: true,
  title: "Danger",
  description: "Are you sure you want to delete this tool?",
};