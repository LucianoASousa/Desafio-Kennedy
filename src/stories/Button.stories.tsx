import { Button } from "../components/DesignSystem";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta

export const Danger : StoryObj = {
  args: {
    children: "Button",
    styles: "danger",
  },
}

export const Neutral : StoryObj = {
  args: {
    children: "Button",
    styles: "neutral",
  },
}

export const Suceess : StoryObj = {
  args: {
    children: "Button",
    styles: "success",
  },
}
