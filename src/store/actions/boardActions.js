import { boardService } from '../../services/boardService'

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

//sets currBoard and returns the board
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
export function tryBoard(boardId) {
  return async dispatch => {
    const board = await boardService.tryBoard(boardId)
    dispatch({ type: 'UPDATE_BOARD', board })
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

  return async dispatch => {
    await boardService.insertBoard(board, position)
    dispatch({board, position})
  }
}


export function removeBoard(boardId) {
  return async dispatch => {
    await boardService.remove(boardId)
    dispatch({ type: 'REMOVE_BOARD', boardId })
  }
}

export function setFilterBy(filterBy) {
  return dispatch => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}

