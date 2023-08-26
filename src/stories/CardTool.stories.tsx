import { CardTool } from "../components/CardTool";

export default {
  title: "Component/CardTool",
  component: CardTool,
  argTypes: {
    title: "string",
    link: "string",
    description: "string",
    tags: "string",
    handleDelete: {
      action: "handleDelete",
    }
  },
}

export const Main = (args : any) => <CardTool {...args} />;
Main.args = {
  title: "Notion",
  link: "https://notion.so",
  description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
  tags: ["organization", "planning", "collaboration", "writing", "calendar"],
};