const INITIAL_STATE = {
    boardId: "",
    groups: [],
    currGroup: null,
    filterBy: null
  }
  export function groupReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_GROUPS':
        return {
          ...state,
          groups: action.groups
        }
      case 'SET_GROUP':
        return {
          ...state,
          currGroup: action.group
        }
      case 'SET_FILTER_BY':
        return {
          ...state,
          filterBy: action.filterBy
        }
      case 'ADD_GROUP':
        return {
          ...state,
          groups: [...state.groups, action.group]
        }
      case 'REMOVE_GROUP':
        return {
          ...state,
          groups: state.groups.filter(group => group._id !== action.groupId)
        }
      case 'UPDATE_GROUP':
        const currGroup = state.currGroup._id === action.group._id ? action.group : state.currGroup
        return {
          ...state,
          groups: state.groups && state.groups.map(group => group._id === action.group._id ? action.group : group),
          currGroup
        }
      default:
        return state
    }
  }