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
    try {
      // if (boardId !== state.c/)
      const board = await boardService.getById(boardId)
      if (taskFilter) { //TODO can move this to the app and then only filter the currBoard, so no need to call service every time you use the filter
        board.groups = board.groups.map(group => {
          return {
            ...group,
            tasks: group.tasks.filter(task => {
              if (!task.title) return false
              return task.title.toUpperCase().includes(taskFilter.toUpperCase())
            })
          }
        })
      }
      dispatch({ type: 'SET_BOARD', board })
    } catch (error) {
      console.log(error);
    }

  }
}
// export function tryBoard(boardId) {
//   return async dispatch => {
//     const board = await boardService.tryBoard(boardId)
//     dispatch({ type: 'UPDATE_BOARD', board })
//   }
// }

export function saveBoard(board, position = 0) {
  const type = board._id ? 'UPDATE_BOARD' : 'ADD_BOARD'
  return async dispatch => {
    const updatedBoard = await boardService.save(board, position)
    dispatch({ type, board, position })
    return updatedBoard
  }
}

export function insertBoard(board, position) {
  console.log('board=', board.title, 'position=', position);
  return async dispatch => {
    await boardService.save(board, position)
    dispatch({type: 'UPDATE_BOARD', board, position})
  }
}


export function removeBoard(boardId) {
  return async dispatch => {
    await boardService.remove(boardId)
    dispatch({ type: 'REMOVE_BOARD', boardId })
  }
}

export function setFilterBy(filterBy, filterName) {
  if (filterName === 'boardFilter'){
    return dispatch => {
      dispatch({ type: 'SET_BOARD_FILTER', filterBy })
    }
  }
  if (filterName === 'taskFilter'){
    return dispatch => {
      dispatch({type: 'SET_TASK_FILTER', filterBy})
    } 
    
    
  }
}

