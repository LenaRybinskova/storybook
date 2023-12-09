import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from '@mui/material';
import {Delete} from '@material-ui/icons';
import {EditableSpan} from './EditableSpan';

/*export const ChangeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        id: id,
        isDone: isDone,
        todolistId: todolistId
    } as const
}
export const ChangeTaskTitleAC = (id: string, title: string, todolistId: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        id: id,
        title: title,
        todolistId: todolistId
    } as const
}
export const RemoveTaskAC = (id: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        taskId: id,
        todolistId: todolistId
    } as const
}*/

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TaskPropsType = {
    task: TaskType
    todolistId: string
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, newIsDoneValue: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, title: string, todolistId: string) => void
}

export const Task = React.memo(({task, todolistId, removeTask, changeTaskStatus, changeTaskTitle}: TaskPropsType) => {

    const onClickHandler = () => removeTask(task.id, todolistId)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue, todolistId);
    }

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)

    }, [])

    return (
        <div className={task.isDone ? 'is-done' : ''}>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />
            <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    );
})