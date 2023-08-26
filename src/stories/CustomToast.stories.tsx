import CustomToast from "../components/CustomToast";

export default {
  title: "Component/CustomToast",
  component: CustomToast,
  argTypes: {
    message : "string",
    type: "string",
    button : "string",
  },
}

export const Main = (args : any) => <CustomToast {...args} />;

Main.args = {
  message: "Ferramenta adicionada com sucesso!",
  type: "success",
  button: "Continue",
};

export const Error = (args : any) => <CustomToast {...args} />;
Error.args = {
  message: "Ferramenta não adicionada!",
  type: "error",
  button: "Continue",
};