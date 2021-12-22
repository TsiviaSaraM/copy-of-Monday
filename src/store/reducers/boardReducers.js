const INITIAL_STATE = {
    boards: [],
    currBoard: null,
    // filterBy: {
    //   boardFilter: '',
    //   groupFilter: '',
    //   taskFilter: '',
    // },
    boardFilter: null
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
      // case 'SET_FILTER_BY':
      //   return {
      //     ...state,
      //     filterBy: {
      //       ...state.filterBy,
      //       [action.filterName]: action.filterBy
      //     }
      //     // filterBy: action.filterBy
      //   }
      case 'SET_BOARD_FILTER':
        const {boardFilter} = action
        return {
          ...state,
          boardFilter
        }
      case 'INSERT_BOARD':
        const {position, board } = action
        const updatedBoards = {...state.boards}
        updatedBoards.splice(position, 0, board)
        console.log('board=', board.title, 'position=', position, 'boards=', updatedBoards);
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