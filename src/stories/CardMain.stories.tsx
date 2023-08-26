import { Meta } from "@storybook/react";
import { CardMain } from "../components/DesignSystem";

export default {
  title: "Design System/CardMain",
  component: CardMain,
} as Meta

export const Main = (args : any) => <CardMain {...args} />;
Main.args = {
  children: "CardMain",
};
