// const gTodos = require('./../data/todos.json') //JSON STORAGE SETUP
const fs = require('fs')//JSON STORAGE SETUP
// const { resolve } = require('path')//JSON STORAGE SETUP

// const gBoard = import './../data/board.json'

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

//LOCAL STORAGE SETUP
function query(entityType, delay=500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(entities)
        }, delay)
    })
}

// //JSON STORAGE SETUP
// function query(filterBy={txt:''}){
//     console.log(filterBy.txt, 'in service b');
//     const regex = new RegExp(filterBy.txt, 'i')
//     const todosToSend = gTodos.filter(todo => regex.test(todo.name))
//     return new Promise((resolve, reject) =>{
//         if (gTodos) resolve(todosToSend)
//         else reject(err => console.log('error3', err))
//     })

//     // return new Promise((resolve, reject) =>{
//     //     if(gTodos) resolve(gTodos)
//     //     else reject ('there are no todos')
//     // })
// }

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    debugger
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    debugger
    return query(entityType)
        .then(entities => {
            console.log('entities', entities);
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    debugger
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            if (idx < 0) throw new Error(`Unknown Entity ${entityId}`)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    debugger
    //LOCAL STORAGE SETUP
    localStorage.setItem(entityType, JSON.stringify(entities))

    // //JSON STORAGE SETUP
    // return new Promise((resolve, reject) => {
    //     fs.writeFile('data/todos.json', JSON.stringify(gTodos, null, 4), (err) => {
    //         if (err) return reject(err)
    //         resolve()
    //     })
    // })
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
