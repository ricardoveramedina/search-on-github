import type { Meta, StoryObj } from "@storybook/react";
import Card from "@components/atoms/Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "storybookjs/storybook",
    owner: "storybook",
    description:
      "Storybook is the industry standard workshop for building, documenting, and testing UI components in isolation",
    rate: 88200,
    tags: ["react", "javascript", "testing", "html"],
  },
};
