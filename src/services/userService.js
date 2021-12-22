import { storageService } from './asyncStorageService'
import { httpService } from './http.service'
import { utilService } from './utilService'
// import { storageService } from './storageService.js'
import { makeId } from './utilService'

const USER_KEY = 'users'
// const PAGE_SIZE = 10

//this created boards if we have frontend only and are not taking them from the backend database
// _createUsers()

export const userService = {
    query,
    getById,
    remove,
    update,
    getEmptyUser,
    add,
}

window.userService = userService

// eslint-disable-next-line
function xquery(filterBy) {
    console.log('front end user service');
    //TODO filterBy can be added as param below
    return storageService.query(USER_KEY)
    // return httpService.get(`user`, filterBy)
}

export async function query(filterBy) {
    console.log('front end user service');
    //TODO filterBy can be added as param below
    try {
        // const users = await storageService.query(USER_KEY)
        // console.log('users', users);
        // return users
        return httpService.get(`user`, filterBy)
    } catch (error) {
        console.log(error);
    }
}

function getById(userId) {
    // return storageService.get(USER_KEY, userId)
    return httpService.get(`user/${userId}`)
}
function remove(userId) {
    console.log('removing user...', userId);
    // return storageService.remove(USER_KEY, userId)
    return httpService.delete(`user/${userId}`)
}
// eslint-disable-next-line
async function xupdate(user) {
    console.log('user in service front:', user);
    // return storageService.put(USER_KEY, user)
    user = await httpService.put(`user/${user._id}`, user)
    // console.log('user in service front:', user);
    return user;


    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function update(user) {
    console.log('user in service front:', user);
    try {
        const updatedUser = await storageService.put(USER_KEY, user)
        console.log('update user in service', updatedUser);
        return updatedUser
    } catch (error) {
        console.log(error);
    }

    // user = await httpService.put(`user/${user._id}`, user)
    // console.log('user in service front:', user);
    // return user;


    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function add(user) {

    user = _createUser(user.fullname, user.username, user.password)
    // return storageService.post(USER_KEY, user)
    return await httpService.post(`user`, user)
}


function _createUser(fullname, username, password, imgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-ymxim&psig=AOvVaw3OoNBQPOwmAktMYE3vjz_9&ust=1637082366316000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiB05rtmvQCFQAAAAAdAAAAABAJ") {
    if (!username) username = 'un' + utilService.makeName(3)
    if (!password) password = 'pw' + utilService.makeId(4)
    return {
        "_id": "u" + makeId(3),
        "fullname": fullname,
        "username": username,
        "password": password,
        "imgUrl": imgUrl,
        "members":[],
        "mentions": [
            // {"id": "m101",
            // "boardId": "m101",
            // "taskId": "t101"}
        ]
    }
}

export function getEmptyUser() {
    console.log('getting empty user...');
    return {
        "_id": '',
        "fullname": '',
        "username": '',
        "password": '',
        "imgUrl": '',
        "mentions": [
        ]
    }
}

//eslint-disable-next-line
function _createUsers() {
    let users = utilService.loadFromStorage(USER_KEY)
    // let users = storageService.query()
    if (!users || !users.length) {
        users = []
        users.push(_createUser('fn1', 'un1', 'pw1'));
        users.push(_createUser('fn2', 'un2', 'pw2'));
        users.push(_createUser('fn3', 'un3', 'pw3'));
        users.push(_createUser('fn4', 'un4', 'pw4'));
        utilService.saveToStorage(USER_KEY, users)
    }
    return users;
}

//LOGIN FUNCTIONS can go here - I have moed them to auth service


