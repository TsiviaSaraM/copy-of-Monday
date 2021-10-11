import { boardService } from '../../services/boardService'

export function loadBoards() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().boardModule
    try {
      const boards = await boardService.query(filterBy)
      dispatch({ type: 'SET_BOARDS', boards })
      // debugger
    } catch (err) {
      console.log(err);
    }
  }
}

//sets currBoard and returns the board
export function getBoardById(boardId) {
  return async dispatch => {
    const board = await boardService.getById(boardId)
    dispatch({ type: 'SET_BOARD', board })
  }
}

export function setCurrBoard(boardId) {
  return async (dispatch) => {
    try {
      const currBoard = await boardService.getById(boardId)
      dispatch({ type: 'SET_BOARD', currBoard })
      // debugger
      
    } catch (err) {
      
    }


  }
}



export function saveBoard(board){
  const type = board._id ? 'UPDATE_BOARD' : 'ADD_BOARD'
  return async dispatch => {
      await boardService.save(board)
      dispatch({type, board})
  }
}

export function saveGroup(board, group){
  return async dispatch => {
      const updatedBoard = await boardService.saveGroup(board, group)
      dispatch({type:'UPDATE_BOARD', board: updatedBoard})
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