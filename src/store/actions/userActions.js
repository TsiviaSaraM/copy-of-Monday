import { userService } from "../../services/userService";

export function loadBoards(boardFilter) {
    return async (dispatch, getState) => {
        // const { filterBy } = getState().boardModule
        try {
            const boards = await boardService.query(boardFilter)
            dispatch({ type: 'SET_BOARDS', boards })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getBoardById(boardId, taskFilter) {
    return async dispatch => {
        const board = await boardService.getById(boardId)
        if (taskFilter) {
            board.groups = board.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task => {
                        return task.title.includes(taskFilter)
                    })
                }
            })
        }
        dispatch({ type: 'SET_BOARD', board })
    }
}


export function saveBoard(board) {
    const type = board._id ? 'UPDATE_BOARD' : 'ADD_BOARD'
    return async dispatch => {
        await boardService.save(board)
        dispatch({ type, board })
    }
}

export function insertBoard(board, position) {
    console.log('board=', board.title, 'position=', position);
    return async dispatch => {
        await boardService.save(board, position)
        dispatch({ type: 'UPDATE_BOARD', board, position })
    }
}


export function removeBoard(boardId) {
    return async dispatch => {
        await boardService.remove(boardId)
        dispatch({ type: 'REMOVE_BOARD', boardId })
    }
}

export function login(userCred) {
    return async dispatch => {
        await userService.login(userCred)
        dispatch({type: 'LOGIN', userCred})
    }
}

export function logout(userCred) {
    return async dispatch => {
        await userService.logout()
        dispatch({type: 'LOGOUT', userCred}) //cn be ({SET_USER_CRED, null})
    }
}
