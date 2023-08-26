import { Label } from "../components/DesignSystem";

export default {
  title: "Design System/Label",
  component: Label,
};

export const Main = (args : any) => <Label {...args} />;
Main.args = {
  children: "Label",
  htmlFor: "label",
};

export const LabelWithError = (args : any) => <Label {...args} />;
LabelWithError.args = {
  children: "Password",
  htmlFor: "password",
  error: ["password obrigatório"],
};