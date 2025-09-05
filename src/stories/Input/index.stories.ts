import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input as InputComponent } from '.';

const meta: Meta<typeof InputComponent> = {
  title: 'Components/Form',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Input: Story = {
  args: {
    placeholder: 'type here...',
  },
};
