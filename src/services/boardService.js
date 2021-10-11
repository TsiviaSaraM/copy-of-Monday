import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const boardService = {
    query,
    save,
    remove,
    getById,
    getEmptyBoard,
    getGroups,
    saveGroup
}

const STORAGE_KEY = 'boards'

const gDefaultBoards = [
    {
        "_id": "b101",
        "title": "Board #1 title",
        "description": "Add board description",
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Abi Abambi",
            "imgUrl": "http://some-img"
        },
        "style": {},
        "labels": [
            {
                "id": "l101",
                "title": "Done",
                "color": "#61bd4f"
            }
        ],
        "members": [
            {
                "_id": "u101",
                "fullname": "Tal Tarablus",
                "imgUrl": "https://www.google.com"
            }
        ],
        "columns":[],
        "groups": [
            {
                "id": "g101",
                "title": "Group 1",
                "tasks": [
                    {
                        "id": "c101",
                        "title": "Replace logo",
                        "status": "done"
                    },
                    {
                        "id": "c102",
                        "title": "Add Samples",
                        "status": "done"
                    }
                ],
                "style": {}
            },
            {
                "id": "g102",
                "title": "Group 2",
                "tasks": [
                    {
                        "id": "c103",
                        "title": "Do that",
                        "status": "done"
                    },
                    {
                        "id": "c104",
                        "title": "Help me",
                        "status": "done",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        ],
                        "labelIds": ["101"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    }
                ],
                "style": {}
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ]
    },
    {
        "_id": "b102",
        "title": "Robot dev proj (board2)",
        "description": "Add board description",
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Abi Abambi",
            "imgUrl": "http://some-img"
        },
        "style": {},
        "labels": [
            {
                "id": "l101",
                "title": "Done",
                "color": "#61bd4f"
            }
        ],
        "members": [
            {
                "_id": "u101",
                "fullname": "Tal Tarablus",
                "imgUrl": "https://www.google.com"
            }
        ],
        "columns":[],
        "groups": [
            {
                "id": "g101",
                "title": "Group 1",
                "tasks": [
                    {
                        "id": "c101",
                        "title": "Replace logo",
                        "status": "done"
                    },
                    {
                        "id": "c102",
                        "title": "Add Samples",
                        "status": "done"
                    }
                ],
                "style": {}
            },
            {
                "id": "g102",
                "title": "Group 2",
                "tasks": [
                    {
                        "id": "c103",
                        "title": "Do that",
                        "status": "done"
                    },
                    {
                        "id": "c104",
                        "title": "Help me",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            }
                        ],
                        "labelIds": ["101"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        },
                        "status": "done"
                    }
                ],
                "style": {}
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ]
    }
]

var gBoards = _loadBoards()

async function query(filterBy) {
    // let boardsToReturn = gBoards;
    let boardsToReturn = _loadBoards()
    if (filterBy) {
        var { type, maxStrength, minStrength, name } = filterBy
        maxStrength = maxStrength || Infinity
        minStrength = minStrength || 0
        boardsToReturn = gBoards.filter(board => board.type.toLowerCase().includes(type.toLowerCase()) && board.name.toLowerCase().includes(name.toLowerCase())
            && (board.strength < maxStrength)
            && board.strength > minStrength)
    }
    return Promise.resolve([...boardsToReturn]);
}

async function getById(id) {
    const board = await gBoards.find(board => board._id === id)
    if (!board) return Promise.reject()
    return Promise.resolve({ ...board })
}

function remove(id) {
    const idx = gBoards.findIndex(board => board._id === id)
    gBoards.splice(idx, 1)
    if (!gBoards.length) gBoards = gDefaultBoards.slice()
    storageService.store(STORAGE_KEY, gBoards)
    return Promise.resolve()
}

function save(boardToSave) {
    if (boardToSave._id) {
        const idx = gBoards.findIndex(board => board._id === boardToSave._id)
        gBoards.splice(idx, 1, boardToSave)
    } else {
        boardToSave._id = makeId()
        boardToSave.groups = []
        boardToSave.members = []
        boardToSave.columns = []
        gBoards.push(boardToSave)
    }
    storageService.store(STORAGE_KEY, gBoards)
    return Promise.resolve(boardToSave);
}

function getEmptyBoard() {
    // console.log('getting empty board in service');
    // return Promise.resolve({
    //     name: '',
    //     type: '',
    //     strength: 100
    // })
    return {
            id: '',
            name: '',
            type: '',
            strength: 100
        }
}

function _loadBoards() {
    let boards = storageService.load(STORAGE_KEY)
    if (!boards || !boards.length) {
        boards = gDefaultBoards
        storageService.store(STORAGE_KEY, boards)
    }
    return boards
}

//functions for the groupService, maybe just use the functions above
function getGroups(boardId) {return gBoards.find(board => board._id === boardId).groups}
// function saveGroups(boardToUpdate, updatedGroups) {save({...board, groups: [...board.groups, newGroup]})}

function saveGroup(board, groupToSave) {
    // const boardGroups = boardService.getGroups(board)
    const boardGroups = board.groups
    if (groupToSave.id) {
        const idx = boardGroups.findIndex(group => group.id === groupToSave.id)
        boardGroups.splice(idx, 1, groupToSave)
    } else {
        groupToSave.id = makeId()
        if (!groupToSave.tasks) groupToSave.tasks = []
        if (!groupToSave.style) groupToSave.style = {}
        boardGroups.push(groupToSave)
    }
    // boardService.saveGroups(board, boardGroups)
    return save({...board, groups: boardGroups} )
}
