import { storageService } from './asyncStorageService'
// import { httpService } from './http.service'
import users from './../data/user.json'
// import { utilService } from './util-service'
const SCORE_FOR_REVIEW = 10

console.log(users);

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

function _createUser(name, price=100, type="Funny", inStock=false) {
    return {
        // _id:utilService.makeId(),
        name,
        price,
        type,
        createdAt: new Date(),
        inStock,
        reviews: [],
    }
}

function getEmptyUser() {
    console.log('getting empty user...');
    return { _id: '', name: '', price:0, type:'', inStock:false, reviews: []}
}



