import { Meta } from "@storybook/react";
import { Input } from "../components/DesignSystem";

export default {
  title: "Design System/Input",
  component: Input,
  argTypes: {
    error: {
      control: {
        type: "array",
      },
    },
    onchange: {
      action: "changed",
    },
  },
} as Meta

export const Main = (args : any) => <Input {...args} />;
Main.args = {
  placeholder: "Placeholder",
  
};

export const InputWithError = (args : any) => <Input {...args} />;
InputWithError.args = {
  placeholder: "Placeholder",
  name: "email",
  error: ["email obrigatório"],
};
