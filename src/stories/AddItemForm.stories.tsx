import type {Meta, StoryObj} from '@storybook/react';
import {AddItemForm, AddItemFormPropsType} from './AddItemForm';
import { action } from '@storybook/addon-actions'


const meta = {
    title: 'TODOLIST/AddItemForm',
    component: AddItemForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const callback=action("ввели в форму значение: ")

export const FirstStory: Story = (args: AddItemFormPropsType) => {
    return <AddItemForm addItem={callback} />;
};

FirstStory.args = {};


