import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';


const meta = {
  title: 'Example/Button', // назв
  component: Button, // сама компонента
  parameters: { // парам для визуального оторб компоненты, НЕ ОБЯЗ ПАРАМ
    layout: 'centered', // по гориз по центру
  },
  tags: ['autodocs'], // тег имя, по котор потом можно легко найти эту компон
  argTypes: {
   /* backgroundColor: {
      control: 'color',
      description:"цвет кнопки"
    },
    size:{
      description:"размер кнопки"
/!*      options:['small', 'medium', 'large']*!/
    }*/
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

//это тест-кейсы как бы, можно брать у дизайнера
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};







/*
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
*/
