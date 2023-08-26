import { TextArea } from "../components/DesignSystem";

export default {
  title: "Design System/TextArea",
  component: TextArea,
};

export const Main = (args : any) => <TextArea {...args} />;

export const TextAreaWithError = (args : any) => <TextArea {...args} />;
TextAreaWithError.args = {
  placeholder: "Placeholder",
  name: "description",
  error: ["description obrigatório"],
};