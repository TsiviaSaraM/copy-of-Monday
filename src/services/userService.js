import { storageService } from './asyncStorageService'
// import { httpService } from './http.service'
import users from './../data/user.json'
// import { utilService } from './util-service'
// import { storageService } from './storageService.js'
import { makeId } from './utilService'

console.log('users', users);

export const userService = {
    query,
    getById,
    remove,
    update,
    getEmptyUser,
    add,
}

window.userService = userService

function query(filterBy) {
    console.log('front end user service');
    //TODO filterBy can be added as param below
    return storageService.query('user')
    // return httpService.get(`user`, filterBy)
}

function getById(userId) {
    return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
}
function remove(userId) {
    console.log('removing user...');
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    console.log('user in service front:', user);
    return storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // console.log('user in service front:', user);
    // return user;


    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function add(user) {

    user = _createUser(user.name, user.price)
    return storageService.post('user', user)
    // user = await httpService.post(`user`, user)
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function _createUser(fullname, username, password, imgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-ymxim&psig=AOvVaw3OoNBQPOwmAktMYE3vjz_9&ust=1637082366316000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiB05rtmvQCFQAAAAAdAAAAABAJ") {
    return {
        "_id": "u" + makeId(3),
        "fullname": fullname,
        "username": username,
        "password": password,
        "imgUrl": imgUrl,
        "mentions": [
            // {"id": "m101",
            // "boardId": "m101",
            // "taskId": "t101"}
        ]
    }
}

function getEmptyUser() {
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



