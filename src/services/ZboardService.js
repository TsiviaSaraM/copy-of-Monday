import { storageService } from './asyncStorageService'
// import { httpService } from './http.service'
import boards from '../data/board.json'
// import { utilService } from './util-service'
const SCORE_FOR_REVIEW = 10

const STORAGE_KEY = 'tigers'

console.log(boards);
var boards = _loadBoards()

export const boardService = {
    query,
    getById,
    remove,
    update,
    getEmptyBoard,
    add,
}

window.boardService = boardService

function query(filterBy) {
    console.log('front end board service');
    //TODO filterBy can be added as param below
    return storageService.query('board')
    // return httpService.get(`board`, filterBy)
}

function getById(boardId) {
    return storageService.get('board', boardId)
    // return httpService.get(`board/${boardId}`)
}
function remove(boardId) {
    console.log('removing board...');
    return storageService.remove('board', boardId)
    // return httpService.delete(`board/${boardId}`)
}

async function update(board) {
    console.log('board in service front:', board);
    return storageService.put('board', board)
    // board = await httpService.put(`board/${board._id}`, board)
    // console.log('board in service front:', board);
    // return board;


    // Handle case in which admin updates other board's details
    // if (getLoggedinUser()._id === board._id) _saveLocalBoard(board)
}

async function add(board) {

    board = _createBoard(board.name, board.price)
    return storageService.post('board', board)
    // board = await httpService.post(`board`, board)
}

function _saveLocalBoard(board) {
    sessionStorage.setItem('loggedinBoard', JSON.stringify(board))
    return board
}

function _createBoard(name, price=100, type="Funny", inStock=false) {
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

function getEmptyBoard() {
    console.log('getting empty board...');
    return { _id: '', name: '', price:0, type:'', inStock:false, reviews: []}
}



