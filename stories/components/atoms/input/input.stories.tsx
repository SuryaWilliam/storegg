import Input, { InputProps } from "../../../../components/atomic/Input";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Atoms/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Nama Lengkap",
};
