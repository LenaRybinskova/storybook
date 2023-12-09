import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions'
import {EditableSpan, EditableSpanPropsType} from './EditableSpan';


const meta = {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof EditableSpan>;

export default meta;
type Story = StoryObj<typeof meta>;

const callback=action("изменено значение title: ")

export const Default: Story = (args: EditableSpanPropsType) => {
    return <EditableSpan onChange={callback} value={"молоко"} />;
};

Default.args = {
    value:"молоко"
};


