import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown as DropdownComponent } from '.';

const meta: Meta<typeof DropdownComponent> = {
  title: 'Components/Form',
  component: DropdownComponent,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    withSearch: { control: 'boolean' },
    withPortal: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownComponent>;

const options = [
  { id: 1, label: 'Apple', value: 'apple' },
  { id: 2, label: 'Banana', value: 'banana' },
  { id: 3, label: 'Orange', value: 'orange' },
  { id: 4, label: 'Mango', value: 'mango' },
  { id: 5, label: 'Grapes', value: 'grapes' },
];

export const Dropdown: Story = {
  args: {
    options,
    multiple: true,
    withSearch: false,
    withPortal: true,
  },
};
