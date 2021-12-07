import React from 'react'
import { TaskPreview } from './TaskPreview'
// import { getEmptyTask } from './../services/boardService'
import { Droppable } from 'react-beautiful-dnd'

export const TaskList = ({ group, onEditGroup, onDeleteGroup }) => {

    // const editGroup = () => {
    //     group.title = prompt('new group title')
    //     onEditGroup(group)

    // }

    // const addTask = () => {
    //     const newTask = getEmptyTask()
    //     group.tasks.push(newTask)
    //     onEditGroup(group)
    // }

    const onEditTask = (updatedTask) => {
        console.log('updated task', updatedTask);
        const taskIndex = group.tasks.findIndex(task => task.id === updatedTask.id)
        group.tasks.splice(taskIndex, 1, updatedTask)
        onEditGroup(group)
    }

    const onRemoveTask = (taskId) => {
        const taskIndex = group.tasks.findIndex(task => task.id === taskId)
        group.tasks.splice(taskIndex, 1)
        onEditGroup(group)
    }

    return (
        // <p>TASK_LIST</p>
        <Droppable className="task-group" droppableId={group.id} type="TASK">
            {provided => (

                // <tbody
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {group.tasks.map((task, index) => (
                        <TaskPreview hoverColor={group.style.hover} index={index} groupId={group.id} task={task} key={task.id} onEditTask={onEditTask} onRemoveTask={onRemoveTask}></TaskPreview>
                        // <div className="task" groupId={group.id} >hi</div>
                    ))}
                    {provided.placeholder}
                </div>
                // </tbody>
            )}
        </Droppable>
    )
}
