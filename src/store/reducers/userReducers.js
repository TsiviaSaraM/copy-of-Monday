const INITIAL_STATE = {
    loggedInUser: {
      name: 'Muki',
      balance: 100
    },
    users:[]
  }
  export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'login':
        return {
          ...state,
          loggedInUser: {
            ...state.loggedInUser,
            balance: state.loggedInUser.balance - action.spendAmount
          }
        }
      default:
        return state
    }
  }