import { boardService } from '../../services/boardService'

export function loadBoards() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().boardModule
    try {
      const boards = await boardService.query(filterBy)
      dispatch({ type: 'SET_BOARDS', boards })
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
export function tryBoard(boardId) {
  return async dispatch => {
    const board = await boardService.tryBoard(boardId)
    dispatch({ type: 'UPDATE_BOARD', board })
  }
}

export function saveBoard(board){
  const type = board._id ? 'UPDATE_BOARD' : 'ADD_BOARD'
  return async dispatch => {
      await boardService.save(board)
      dispatch({type, board})
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