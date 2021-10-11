import { boardService } from './boardService.js';
import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const groupService = {
    query,
    saveGroup,
    remove,
    getById,
    getEmptyGroup,
    tryGroup
}


// var boardGroups = _loadGroups()

// function query(boardId, filterBy) {
//     let groupsToReturn = boardGroups;
//     if (filterBy) {
//         var { type, maxStrength, minStrength, name } = filterBy
//         maxStrength = maxStrength || Infinity
//         minStrength = minStrength || 0
//         groupsToReturn = boardGroups.filter(group => group.type.toLowerCase().includes(type.toLowerCase()) && group.name.toLowerCase().includes(name.toLowerCase())
//             && (group.strength < maxStrength)
//             && group.strength > minStrength)
//     }
//     return Promise.resolve([...groupsToReturn]);
// }


async function getById(board, id) {
    const boardGroups = boardService.getGroups(board)
    const group = await boardGroups.find(group => group._id === id)
    if (!group) return Promise.reject()
    return Promise.resolve({ ...group })
}

function remove(board, id) {
    const boardGroups = boardService.getGroups(board)
    const idx = boardGroups.findIndex(group => group._id === id)
    boardGroups.splice(idx, 1)
    storageService.store(STORAGE_KEY, boardGroups)
    return Promise.resolve()
}

//groupToSave must have a title
function saveGroup(board, groupToSave) {
    const boardGroups = boardService.getGroups(board)
    if (groupToSave.id) {
        const idx = boardGroups.findIndex(group => group.id === groupToSave.id)
        boardGroups.splice(idx, 1, groupToSave)
    } else {
        groupToSave.id = makeId()
        if (!groupToSave.tasks) groupToSave.tasks = []
        if (!groupToSave.style) groupToSave.style = {}
        boardGroups.push(groupToSave)
    }
    boardService.saveGroups(board, boardGroups)
    // boardService.save({...board, groups: [...board.groups, newGroup]} )
    return Promise.resolve(groupToSave);
}
