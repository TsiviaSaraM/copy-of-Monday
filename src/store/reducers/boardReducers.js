const INITIAL_STATE = {
  boards: [],
  currBoard: null,
  // filterBy: {
  //   boardFilter: '',
  //   groupFilter: '',
  //   taskFilter: '',
  // },
  boardFilter: null,
  taskFilter: null
}
export function boardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_BOARDS':
      return {
        ...state,
        boards: action.boards
      }
    case 'SET_BOARD':
      return {
        ...state,
        currBoard: action.board
      }
    case 'SET_TASK_FILTER':
      const { taskFilter } = action
      const oldTaskFilter = state.taskFilter
      return {
        ...state,
        taskFilter: {
          ...oldTaskFilter, taskFilter
        }
      }
    case 'SET_BOARD_FILTER':
      const { boardFilter } = action
      return {
        ...state,
        boardFilter
      }
    case 'INSERT_BOARD':
      const { position, board } = action
      const updatedBoards = { ...state.boards }
      updatedBoards.splice(position, 0, board)
      return {
        ...state,
        boards: updatedBoards
      }
    case 'ADD_BOARD':
      return {
        ...state,
        boards: [...state.boards, action.board]
      }
    case 'REMOVE_BOARD':
      return {
        ...state,
        boards: state.boards.filter(board => board._id !== action.boardId)
      }
    case 'UPDATE_BOARD':
      const currBoard = state.currBoard._id === action.board._id ? action.board : state.currBoard
      return {
        ...state,
        boards: state.boards && state.boards.map(board => board._id === action.board._id ? action.board : board),
        currBoard
      }
    default:
      return state
  }
}