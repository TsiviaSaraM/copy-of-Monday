import { userService } from "../../services/userService";
import { authService } from "../../services/authService";

export function loadUsers(userFilter) {
    return async (dispatch, getState) => {
        // const { filterBy } = getState().userModule
        try {
            const users = await userService.query(userFilter)
            dispatch({ type: 'LOAD_USERS', users })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getUserById(userId, taskFilter) {
    return async dispatch => {
        const user = await userService.getById(userId)
        if (taskFilter) {
            user.groups = user.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task => {
                        return task.title.includes(taskFilter)
                    })
                }
            })
        }
        dispatch({ type: 'SET_USER', user })
    }
}

export function updateUser(userToUpdate) {
    const type = 'UPDATE_USER'
    return async dispatch => {
        await userService.update(userToUpdate)
        dispatch({type, userToUpdate})
    }
}

export function saveUser(user) {
    // const type = user._id ? 'UPDATE_USER' : 'ADD_USER'
    const type = 'ADD_USER'
    return async dispatch => {
        try {
            user = await userService.add(user)
            dispatch({ type, user })
        } catch (error) {
            console.log(error);            
        }
    }
}

export function insertUser(user, position) {
    console.log('user=', user.title, 'position=', position);
    return async dispatch => {
        await userService.save(user, position)
        dispatch({ type: 'UPDATE_USER', user, position })
    }
}


export function removeUser(userId) {
    return async dispatch => {
        await userService.remove(userId)
        dispatch({ type: 'REMOVE_USER', userId })
    }
}

export function login(userCred) {
    return async dispatch => {
        const user = await authService.login(userCred) //returns all user fields besides password (03Jan22)
        console.log('user in actions', user);
        dispatch({type: 'LOGIN', user})
    }
}

export function signup(userCred){
    return async dispatch => {
        const newUser = await authService.signup(userCred)
        dispatch({type: 'SIGNUP', newUser})
    }
}

export function logout(userCred) {
    return async dispatch => {
        await authService.logout()
        dispatch({type: 'LOGOUT', userCred}) //cn be ({SET_USER_CRED, null})
    }
}
