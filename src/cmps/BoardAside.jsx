import React from 'react'
// eslint-disable-next-line
import { BoardFilter } from './BoardFilter'
import { FormAddBoard } from './forms/FormAddBoard'
import { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { useState } from 'react';
import { FormBoardAsideControls } from './forms/FormBoardAsideControls';
import { GoKebabHorizontal } from 'react-icons/go'
import { useSelector } from 'react-redux';

//board CRUD is here
export const BoardAside = ({ boards, onAddBoard, onRemoveBoard, onEditBoard, onSelectBoard, editBoardFilter, onInsertBoard }) => {


    const [addBoardFormOpen, setAddBoardFormOpen] = useState(false)
    const [controlsFormOpen, setControlsFormOpen] = useState(false)
    const [boardToControl, setBoardToControl] = useState(null)
    const [boardFilter, setBoardFilter] = useState(null)
    const ref = useRef()
    const { loggedInUser } = useSelector(state => state.userModule) || { fullname: 'mister user' }
    useOnClickOutside(ref, () => {
        setAddBoardFormOpen(false)
        setControlsFormOpen(false)
    })

    const insertNewBoard = (direction, activeBoard) => {
        const difference = direction === 'ABOVE' ? 0 : 1
        const position = boards.findIndex(board => board._id === activeBoard._id) + difference
        onInsertBoard(position)
    }

    // eslint-disable-next-line
    const onEditBoardName = (board) => {
        const newName = prompt('new name')
        onEditBoard({ ...board, title: newName })
    }

    const onEditBoardFilter = async (event) => {
        const field = event.target.name
        const value = event.target.value
        // setBoardFilter({[field]: value})
        setBoardFilter(boardFilter => { return { ...boardFilter, [field]: value } });
        // dispatch(setFilterBy())
        editBoardFilter({ [field]: value })
    }

    // setControlsFormOpen(true)

    return (
        <div className="board-aside">

            {
                controlsFormOpen &&
                <div ref={ref}>

                    <FormBoardAsideControls insertNewBoard={insertNewBoard} onEditBoard={onEditBoard} onRemoveBoard={onRemoveBoard} setControlsFormOpen={setControlsFormOpen} board={boardToControl} onSelectBoard={onSelectBoard} onAddBoard={onAddBoard} />
                </div>
            }

            {addBoardFormOpen &&
                <>
                    <div className="form-container"></div>
                    <div ref={ref} >
                        <FormAddBoard setAddBoardFormOpen={setAddBoardFormOpen} onAddBoard={onAddBoard}></FormAddBoard>

                    </div>
                </>
            }
            <div className="header">
                <div className="user">
                    <span>Hi {loggedInUser.fullname}</span>
                </div>

                {/* <h2 className="boards">Boards</h2> */}
                {/* NB separate workspaces is a feature that will come later, KEEP this here */}
                <div className="workspace">
                    <h2 className="workspace-title-container" >
                        <div className="letter-container">
                            <span>M</span>
                            <div className="icon-container">
                                <i></i>
                            </div>
                        </div>
                        <div className="workspace-title">My boards</div>
                    </h2>
                </div>

            </div>

            <li className="board-control-container" onClick={() => setAddBoardFormOpen(true)}>
                <div className="board-control flex">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" className="icon_component icon_component--no-focus-style"><path d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V9.25H3C2.58579 9.25 2.25 9.58579 2.25 10C2.25 10.4142 2.58579 10.75 3 10.75H9.25V17C9.25 17.4142 9.58579 17.75 10 17.75C10.4142 17.75 10.75 17.4142 10.75 17V10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H10.75V3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <p className="title" >Add</p>
                </div>
            </li>
            {/* <li className="board-control-container" >
                <div className="board-control flex">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" className="icon_component icon_component--no-focus-style"><path d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <p className="title" >Filter</p>
                </div>
            </li> */}
            <li className="board-control-container" >
                <div className="board-control flex">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="26" height="26" role="button" tabIndex="0" aria-hidden="false" className="icon_component search-icon icon_component--clickable"><path d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    <input className="input-search" type="text" name="searchText" placeholder="Search" onChange={onEditBoardFilter} />
                    {/* <div className="title"></div> */}
                </div>
            </li>
            <hr></hr>


            {boards.map(board =>
                <React.Fragment key={board._id}>
                    <li className="board-preview-container" onClick={() => setBoardToControl(board)} >
                        <div className="board-preview flex">
                            <div className="left-side-icon">
                                {/* <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" role="img" aria-hidden="true" aria-label="Public board" className="icon_component"><path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                                {/* <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" aria-label="Delete" className="icon_component icon_component--no-focus-style"><path d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                                <svg width="14" height="14" viewBox="-32 0 512 512"><path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/></svg>
                                {/* <div className="delete"></div> */}
                            </div>
                            <p className="title" onClick={() => onSelectBoard(board)} >{board.title} </p>
                            {/* <svg onClick={() => onEditBoardName(board)} viewBox="0 0 20 20" fill="currentColor" width="16" height="16" role="img" aria-hidden="true" aria-label="Rename Board" className="edit-board icon_component icon_component--no-focus-style"><path d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg> */}
                            {/* <p onClick={() => onRemoveBoard(board)}>x</p> */}
                            <div className="kebab" onClick={() => setControlsFormOpen(true)}><GoKebabHorizontal /></div>

                        </div>
                    </li>
                </React.Fragment>

            )}
        </div>
    )
}

// Shearable board icon:
// <svg viewBox="0 0 20 20" fill="currentColor" width="19" height="19" aria-hidden="true" aria-label="Shareable board" className="icon_component"><path d="M7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V7.88998C16.7908 7.83097 17.0917 7.79999 17.3999 7.79999C17.6034 7.79999 17.8037 7.81349 18 7.83965V5C18 3.89543 17.1046 3 16 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H9.34145C9.06468 16.5554 8.88215 16.0461 8.82178 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM15.4464 11.9979C15.4173 11.8516 15.4023 11.7017 15.4023 11.5502C15.4023 10.9406 15.6445 10.3558 16.0757 9.92472C16.5068 9.4936 17.0915 9.2514 17.7012 9.2514C18.3109 9.2514 18.8956 9.4936 19.3267 9.92472C19.7578 10.3558 20 10.9406 20 11.5502C20 12.1599 19.7578 12.7447 19.3267 13.1758C18.8956 13.6069 18.3109 13.8491 17.7012 13.8491C17.1494 13.8491 16.6182 13.6507 16.2027 13.2935L14.5247 14.309C14.5728 14.4951 14.5977 14.6881 14.5977 14.8836C14.5977 15.0813 14.5722 15.2765 14.5231 15.4646L16.016 16.0786C16.0355 16.0577 16.0554 16.0371 16.0757 16.0168C16.5068 15.5856 17.0915 15.3434 17.7012 15.3434C18.3109 15.3434 18.8956 15.5856 19.3267 16.0168C19.7578 16.4479 20 17.0326 20 17.6423C20 18.252 19.7578 18.8367 19.3267 19.2678C18.8956 19.6989 18.3109 19.9411 17.7012 19.9411C17.0915 19.9411 16.5068 19.6989 16.0757 19.2678C15.6445 18.8367 15.4023 18.252 15.4023 17.6423C15.4023 17.5783 15.405 17.5147 15.4103 17.4514L13.664 16.7332C13.2711 17.0232 12.7932 17.1824 12.2988 17.1824C11.6892 17.1824 11.1044 16.9402 10.6733 16.5091C10.2422 16.078 10 15.4933 10 14.8836C10 14.2739 10.2422 13.6891 10.6733 13.258C11.1044 12.8269 11.6892 12.5847 12.2988 12.5847C12.8064 12.5847 13.2967 12.7526 13.6955 13.0576L15.4464 11.9979Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>