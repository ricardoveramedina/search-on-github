import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "@components/atoms/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Atoms/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Back clicked"),
    disabled: false,
  },
};
