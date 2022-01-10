import { authService } from "../../services/authService"

const INITIAL_STATE = {
  loggedInUser: authService.getLoggedinUser() || null, //contains all user fields besides password (03Jan22)
  users: [],
  test: 'test'
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        // 
        loggedInUser: action.user
      }
      case 'SIGNUP':
        return {
          ...state,
          users: [...state.users, action.newUser]
        }
    case 'LOGOUT':
      return {
        ...state,
        loggedInUser: null
      }
    case 'LOAD_USERS': //using :-)
      return {
        ...state,
        users: action.users
      }
    case 'SET_USER':
      return {
        ...state,
        currUser: action.user
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy
      }
    case 'UPDATE_USER':
      const {userToUpdate} = action
      const position1 = state.users.findIndex(user => user._id === userToUpdate._id)
      const updatedUsers1 = [...state.users]
      updatedUsers1.splice(position1, 1, userToUpdate)
      return {
        ...state,
        users: updatedUsers1,
      }
    case 'INSERT_USER':
      const { position, user } = action
      const updatedUsers = { ...state.users }
      updatedUsers.splice(position, 0, user)
      console.log('user=', user.title, 'position=', position, 'users=', updatedUsers);
      return {
        ...state,
        users: updatedUsers
      }
    case 'ADD_USER': //redundant
      return {
        ...state,
        users: [...state.users, action.user]
      }
   
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.userId)
      }
    // case 'UPDATE_USER':
    //   const currUser = state.currUser._id === action.user._id ? action.user : state.currUser
    //   return {
    //     ...state,
    //     users: state.users && state.users.map(user => user._id === action.user._id ? action.user : user),
    //     currUser
    //   }

    default:
      return state
  }
}