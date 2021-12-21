import { httpService } from "./http.service";
import { socketService } from "./socket.service";
import {query as getUsers} from './userService'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';

export const authService = {
    login,
    signup,
    logout,
    getLoggedinUser
}

async function login(userCred) {
    // const users = await storageService.query('user'); //CLIENT STORAGE
    // const user = users.find((user) => user.username === userCred.username); //CLIENT STORAGE
    // return _saveLocalUser(user); //CLIENT STORAGE
    
    const user = await httpService.post('auth/login', userCred) //SERVER STORAGE
    // socketService.emit('login', user._id); //SERVER STORAGE, SOCKETS
    if (user) return _saveLocalUser(user); //SERVER STORAGE
  }
  async function signup(userCred) {
    // const user = await storageService.post('user', userCred); //CLIENT STORAGE
    const user = await httpService.post('auth/signup', userCred)  //SERVER STORAGE
    // socketService.emit('set-user-socket', user._id); //SERVER STORAGE, SOCKETS
    console.log('just signed up', user);
    const users = await getUsers();
    console.log('users', users);
    return _saveLocalUser(user);
  }
  async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER); 
    // socketService.emit('unset-user-socket'); //SERVER STORAGE, SOCKETS
    return await httpService.post('auth/logout') //SERVER STORAGE
  }
  
  function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
  }
  
  function getLoggedinUser() {
    if (!sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) {
      sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, 'null');
    }
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
  }
  