import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const boardService = {
    query,
    save,
    remove,
    getById,
    getEmptyBoard,
    getEmptyGroup,
    getEmptyTask,
    tryBoard,
}

const groupHoverColors = ['#66ccff', '#037f4c', '#00c875', '#9cd326', '#cab641', '#ffcb00', '#784bd1', '#a25ddc', '#0086c0',
    '#579bfc', '#bb3354', '#e2445c', '#ff158a', '#ff5ac4', '#ff642e', '#fdab3d', '#7f5347', '#c4c4c4', '#808080']
const groupDefaultColors = ['#66ccff', '#81bfa5', '#80e3ba', '#9cd326', '#e4daa0', '#ffe580', '#bba5e8', '#d1aeee', '#80c2df',
    '#abcdfd', '##dd99a9', '#f0a1ad', '#ff8ac4', '#fface1', '#ffb196', 'fed59e', '#bfa9a3', '#e1e1e1', '#bfbfbf']

const STORAGE_KEY = 'boards'

//status can be done, working, stuck or none
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
        "columns": [],
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
                "style": {
                    "hover": "#579bfc",
                    "color": "#abcdfe"

                }
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
                "style": {
                    "hover": "#a25ddc",
                    "color": "#d1aeee"
                }
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
        "columns": [],
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
                "style": {
                    "hover": "#a25ddc",
                    "color": "#d1aeee"
                }
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
                "style": {
                    "hover": "#579bfc",
                    "color": "#abcdfe"
                }
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

function query(boardFilter) {
    var boardsToReturn = gBoards;

    if (boardFilter) {
        boardsToReturn = boardsToReturn.filter(board => board.title.includes(boardFilter))
    }

    //FILTER HAS MOVED TO STORE
    // if (filterBy) {
    //     boardsToReturn = boardsToReturn.map(board => {
    //         return {
    //             ...board, groups: board.groups.map(group => {
    //                 console.log(group.title);
    //                 return {
    //                     ...group,
    //                     tasks: group.tasks.filter(task => {
    //                         return task.title.includes(filterBy)
    //                     }
    //                     )
    //                 }

    //             })
    //         }
    //     })
    // }
    return Promise.resolve([...boardsToReturn]);
}

function _filteredGroups(filterBy, groups) {

    return groups.map(group => {
        const filteredTasks = _filteredTasks(filterBy, group.tasks)
        if (!filteredTasks.length) return
        return { ...group, tasks: filteredTasks }
    })
}

// function _filteredGroup(filterBy, group) {
//     group.tasks.filter(task => _filteredTask())
//     return {...group, tasks: }
// }

function _filteredTasks(filterBy, group) {
    return { ...group, tasks: group.tasks.filter(task => task.title.includes(filterBy)) }
}


function _filteredTask(filterBy, task) {
    if (task.title.includes(filterBy)) return true
    else return false
}


function tryBoard(id) {
    const board = gBoards.find(board => board._id === id)
    board.strength -= 10
    return Promise.resolve({ ...board })
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

function save(boardToSave, position = -1) {
    //if this is an update
    if (boardToSave._id) {
        const idx = gBoards.findIndex(board => board._id === boardToSave._id)
        gBoards.splice(idx, 1, boardToSave)
    } else {
        boardToSave._id = makeId()
        boardToSave.groups = [
            getEmptyGroup(),
            getEmptyGroup()
        ]
        boardToSave.members = []
        boardToSave.columns = []
        gBoards.splice(position, 0, boardToSave)
        // else gBoards.push(boardToSave)
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
        strength: 100,
        groups: [
            // getEmptyGroup(),
            // getEmptyGroup()
        ]

    }
}


export function getEmptyGroup() {
    const RandomColorPicker = Math.floor(Math.random() * groupDefaultColors.length)
    return {
        // id: '',
        id: 'g' + makeId(3),
        title: 'New Group',
        tasks: [],
        style: {
            color: groupDefaultColors[RandomColorPicker],
            hover: groupHoverColors[RandomColorPicker],
        }

    }
}

export function getEmptyTask() {
    return {
        id: makeId(4),
        status: '',
        title: ''
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

function getGroupById(board, groupId) {
    return board.groups.find(group => group.id === groupId)
}

function getTaskById(board, taskId) {

}

// function insertBoard

