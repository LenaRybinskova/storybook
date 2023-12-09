import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Task, TaskPropsType} from './Task';
import {action} from '@storybook/addon-actions';

const meta: Meta = {
    title: 'TODOLIST/Task',
    component: Task,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
};
export default meta;

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

const removeTaskCallback = action(`Task removed`)
const changeTaskStatusCallback = action(`Status changed`)
const changeTaskTitleCallback = action(`Title changed`)

// 1 история
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Sample Task',
        isDone: false,
    },
    todolistId: 'todolist1',
    removeTask: removeTaskCallback,
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback
};

// 2 история
export const Completed = Template.bind({});
Completed.args = {
    task: {
        id: '2',
        title: 'Completed Task',
        isDone: true,
    },
    todolistId: 'todolist1',
    removeTask: removeTaskCallback,
    changeTaskStatus: changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback
}
;


// 2 вариант как можно сделать, разница в организации и структуре представления отдельных историй. тут 1 история с двумя случаями
/*import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Task, TaskPropsType} from './Task';
import {action} from '@storybook/addon-actions';

const meta: Meta = {
    title: 'TODOLIST/Task',
    component: Task,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
};
export default meta;

const removeTaskCallback = action(`Task removed`)
const changeTaskStatusCallback = action(`Status changed`)
const changeTaskTitleCallback = action(`Title changed`)

export const Default = () => {
    return <>
        <Task task={{id: '1', title: 'Sample Task', isDone: false}} todolistId={'todolist1'}
              removeTask={removeTaskCallback} changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}/>

        <Task task={{id: '2', title: 'Sample Task', isDone: true}} todolistId={'todolist1'}
              removeTask={removeTaskCallback} changeTaskStatus={changeTaskStatusCallback}
              changeTaskTitle={changeTaskTitleCallback}/>
    </>


}*/


