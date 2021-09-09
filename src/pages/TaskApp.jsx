import React, { Component } from 'react'
import { BoardAside } from '../cmps/BoardAside.jsx'
import TaskBoard from '../cmps/TaskBoard.jsx'
import { boardService } from '../services/boardService'
import { userService } from '../services/userService'


export class TaskApp extends Component {
    boards = [
        {
            "_id": "b101",
            "title": "Robot dev proj",
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
            "title": "Robot dev proj",
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

    render() {
        return (
            <div className="task-app">
                <BoardAside boards={this.boards}/>
                <TaskBoard board={this.boards[1]} ></TaskBoard>
            </div>
        )
    }
}
