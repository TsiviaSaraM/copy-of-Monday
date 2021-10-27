import React from 'react'
import { TaskPreview } from './TaskPreview'
// import { getEmptyTask } from './../services/boardService'
import { Droppable } from 'react-beautiful-dnd'

export const TaskGroup = ({ group, onEditGroup, onDeleteGroup }) => {

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
        // <div >

           
               
                <Droppable className="task-group" droppableId={group.id}>
                    {provided => (
                        <tbody
                        ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {group.tasks.map((task, index) => (
                                <TaskPreview  task={task} index={index} key={task.id} onEditTask={onEditTask} onRemoveTask={onRemoveTask}></TaskPreview>
                            ))}
                            {provided.placeholder}
                        </tbody>
                    )}
                </Droppable>
            
        // </div>
    )
}
