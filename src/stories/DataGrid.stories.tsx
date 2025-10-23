import type { Meta, StoryObj } from "@storybook/react";
import DataGrid from "@root/components/organisms/DataGrid";
import data from "./mockData.json";
import data2 from "./mockData100.json";

const meta: Meta<typeof DataGrid> = {
  title: "Organisms/DataGrid",
  component: DataGrid,
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
    data,
    loading: false,
    currentPage: 1,
    pageHandler: (page: number) => console.log("number", page),
  },
};

export const ManyRecords: Story = {
  args: {
    data: data2,
    loading: false,
    currentPage: 1,
    pageHandler: (page: number) => console.log("number", page),
  },
};
