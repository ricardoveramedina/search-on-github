import type { Meta, StoryObj } from "@storybook/react";
import PaginationButtons from "@root/components/atoms/PaginationButtons";

const meta: Meta<typeof PaginationButtons> = {
  title: "Molecules/PaginationButtons",
  component: PaginationButtons,
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
    count: 3,
    handleClick: (value: any) => {
      console.log("to page", value);
    },
  },
};

export const ManyPages: Story = {
  args: {
    count: 10,
    handleClick: (value: any) => {
      console.log("to page", value);
    },
  },
};
