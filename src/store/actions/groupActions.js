import { groupService } from '../../services/groupService'

// export function loadGroups() {
//   return async (dispatch, getState) => {
//     const { filterBy } = getState().groupModule
//     try {
//       const groups = await groupService.query(filterBy)
//       dispatch({ type: 'SET_GROUPS', groups })
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

// //sets currGroup and returns the group
// export function getGroupById(groupId) {
//   return async dispatch => {
//     const group = await groupService.getById(groupId)
//     dispatch({ type: 'SET_GROUP', group })
//   }
// }
// // export function tryGroup(groupId) {
// //   return async dispatch => {
// //     const group = await groupService.tryGroup(groupId)
// //     dispatch({ type: 'UPDATE_GROUP', group })
// //   }
// // }

export function saveGroup(group){
  const type = group.id ? 'UPDATE_GROUP' : 'ADD_GROUP'
  return async dispatch => {
      await groupService.save(group)
      dispatch({type, group})
  }
}


// export function removeGroup(groupId) {
//   return async dispatch => {
//     await groupService.remove(groupId)
//     dispatch({ type: 'REMOVE_GROUP', groupId })
//   }
// }

// export function setFilterBy(filterBy) {
//   return dispatch => {
//     dispatch({ type: 'SET_FILTER_BY', filterBy })
//   }
// }