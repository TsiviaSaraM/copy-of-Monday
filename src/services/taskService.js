//create, update, delete, getById

import { boardService } from "./boardService"

async function getTaskById(taskId, board) {
    if (board) return _getTaskFromBoard(taskId, board)
}

//returns undefined if the task is not found, otherwise returns the task
function _getTaskFromGroup(taskId, group) {
    return group.tasks.find(task => task.id === taskId)
}

function _getTaskFromBoard(taskId, board) {
    //for each group, check if task id in it
    return board.groups.foreach(group => {
        task = _getTaskFromGroup(taskId, group)
        if (task) return task
    })
}

function _getGroupById(groupId, boards){

    boards.foreach(board => {
        board.groups.find(group => group.id == groupId)
    })
}

function createTask(newTask) {
    
}