import React from 'react'
import { Link } from 'react-router-dom'

export const FormBoardAsideControls = ({insertNewBoard, onEditBoard, board, onSelectBoard, onAddBoard, setControlsFormOpen, onRemoveBoard}) => {

    const onOpenInNewWindow = () => {
        const origin = window.origin
        window.open(`${origin}/#/boards/${board._id}`)
        setControlsFormOpen(false)
    }

    const duplicateBoard = () => {
        const newBoard = {...board, _id:''}
        onAddBoard(newBoard
            )
    }

    const onRenameBoard = () => {
        setControlsFormOpen(false)
        board.title = prompt('enter new name')
        onEditBoard(board)
    }

    return (
        <div className="form-board-aside-controls flex-col">

            <div className="row-group">
                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Open Board in New Tab" className="icon_component icon_component--no-focus-style"><path d="M4.07692 3.75C3.99022 3.75 3.90706 3.78444 3.84575 3.84575C3.78444 3.90706 3.75 3.99022 3.75 4.07692V15.9231C3.75 16.0098 3.78444 16.0929 3.84575 16.1542C3.90706 16.2156 3.99022 16.25 4.07692 16.25H15.9231C16.0098 16.25 16.0929 16.2156 16.1542 16.1542C16.2156 16.0929 16.25 16.0098 16.25 15.9231V11.0769C16.25 10.6627 16.5858 10.3269 17 10.3269C17.4142 10.3269 17.75 10.6627 17.75 11.0769V15.9231C17.75 16.4076 17.5575 16.8723 17.2149 17.2149C16.8723 17.5575 16.4076 17.75 15.9231 17.75H4.07692C3.59239 17.75 3.12771 17.5575 2.78509 17.2149C2.44248 16.8723 2.25 16.4076 2.25 15.9231V4.07692C2.25 3.59239 2.44248 3.12771 2.78509 2.78509C3.12771 2.44248 3.59239 2.25 4.07692 2.25H8.92308C9.33729 2.25 9.67308 2.58579 9.67308 3C9.67308 3.41421 9.33729 3.75 8.92308 3.75H4.07692ZM12.4808 3C12.4808 2.58579 12.8166 2.25 13.2308 2.25H17C17.2005 2.25 17.3825 2.32864 17.5171 2.45675C17.5262 2.46537 17.535 2.47422 17.5436 2.48328C17.6073 2.55021 17.6562 2.62602 17.6904 2.70659C17.7288 2.79671 17.75 2.89588 17.75 3V6.76923C17.75 7.18344 17.4142 7.51923 17 7.51923C16.5858 7.51923 16.25 7.18344 16.25 6.76923V4.81066L10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303C9.17678 10.2374 9.17678 9.76256 9.46967 9.46967L15.1893 3.75H13.2308C12.8166 3.75 12.4808 3.41421 12.4808 3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text" onClick={() => onOpenInNewWindow()} >Open Board in New Tab</div>
                </div>

            </div>

            <div className="row-group">
                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Rename Board" className="icon_component icon_component--no-focus-style"><path d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text" onClick={onRenameBoard}>Rename Board</div>
                </div>

                <div className="form-row" onClick={duplicateBoard}>
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Duplicate Board" className="icon_component icon_component--no-focus-style"><path d="M7.82576 3.7273C7.82576 3.58922 7.93769 3.47729 8.07576 3.47729H9.76937H13.1567C13.2184 3.47729 13.278 3.50016 13.3239 3.54147L15.94 5.89592C15.9927 5.94334 16.0227 6.01088 16.0227 6.08175V13.3637C16.0227 13.5017 15.9108 13.6137 15.7727 13.6137H8.07576C7.93769 13.6137 7.82576 13.5017 7.82576 13.3637V3.7273ZM8.07576 1.97729C7.10926 1.97729 6.32576 2.7608 6.32576 3.7273V4.88639H5.16667C4.20017 4.88639 3.41667 5.66989 3.41667 6.63639V16.2727C3.41667 17.2392 4.20018 18.0228 5.16667 18.0228H11.8939C12.8604 18.0228 13.6439 17.2392 13.6439 16.2727V15.1137H15.7727C16.7392 15.1137 17.5227 14.3302 17.5227 13.3637V6.08175C17.5227 5.58565 17.3122 5.11286 16.9434 4.78098L14.3274 2.42653C14.006 2.13732 13.589 1.97729 13.1567 1.97729H9.76937H8.07576ZM12.1439 15.1137H8.07576C7.10927 15.1137 6.32576 14.3302 6.32576 13.3637V6.38639H5.16667C5.0286 6.38639 4.91667 6.49831 4.91667 6.63639V16.2727C4.91667 16.4108 5.0286 16.5227 5.16667 16.5227H11.8939C12.032 16.5227 12.1439 16.4108 12.1439 16.2727V15.1137Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text">Duplicate Board</div>
                </div>
            </div>

            <div className="row-group">
                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Delete" className="icon_component icon_component--no-focus-style"><path d="M8.30035 1.86462C7.77994 1.86462 7.29477 2.08976 6.94732 2.46719C6.60179 2.84253 6.41724 3.33927 6.41724 3.84552V4.32642H4.901H2.63477C2.22055 4.32642 1.88477 4.6622 1.88477 5.07642C1.88477 5.49063 2.22055 5.82642 2.63477 5.82642H4.151V16.1545C4.151 16.6608 4.33556 17.1575 4.68109 17.5328C5.02853 17.9103 5.51371 18.1354 6.03411 18.1354H13.9659C14.4863 18.1354 14.9715 17.9103 15.3189 17.5328C15.6645 17.1575 15.849 16.6608 15.849 16.1545V5.82642H17.3652C17.7794 5.82642 18.1152 5.49063 18.1152 5.07642C18.1152 4.6622 17.7794 4.32642 17.3652 4.32642H15.099H13.5828V3.84552C13.5828 3.33927 13.3982 2.84253 13.0527 2.46719C12.7053 2.08976 12.2201 1.86462 11.6997 1.86462H8.30035ZM7.16447 5.82642C7.16539 5.82642 7.16631 5.82642 7.16724 5.82642H12.8328C12.8337 5.82642 12.8346 5.82642 12.8356 5.82642H14.349V16.1545C14.349 16.3012 14.2948 16.4306 14.2153 16.5169C14.1378 16.6012 14.0465 16.6354 13.9659 16.6354H6.03411C5.95348 16.6354 5.86223 16.6012 5.78468 16.5169C5.7052 16.4306 5.651 16.3012 5.651 16.1545V5.82642H7.16447ZM12.0828 4.32642V3.84552C12.0828 3.69887 12.0286 3.56943 11.9491 3.4831C11.8716 3.39886 11.7803 3.36462 11.6997 3.36462H8.30035C8.21972 3.36462 8.12847 3.39886 8.05091 3.4831C7.97144 3.56943 7.91724 3.69887 7.91724 3.84552V4.32642L12.0828 4.32642Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text" onClick={()=>{onRemoveBoard(board)}}>Delete</div>
                </div>

                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Create new Board below" className="icon_component icon_component--no-focus-style"><path d="M10.75 6C10.75 5.58579 10.4142 5.25 10 5.25C9.58579 5.25 9.25 5.58579 9.25 6V9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text" onClick={()=>insertNewBoard('ABOVE', board)}>Create new Board above</div>
                </div>

                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Create new Board below" className="icon_component icon_component--no-focus-style"><path d="M10.75 6C10.75 5.58579 10.4142 5.25 10 5.25C9.58579 5.25 9.25 5.58579 9.25 6V9.25H6C5.58579 9.25 5.25 9.58579 5.25 10C5.25 10.4142 5.58579 10.75 6 10.75H9.25V14C9.25 14.4142 9.58579 14.75 10 14.75C10.4142 14.75 10.75 14.4142 10.75 14V10.75H14C14.4142 10.75 14.75 10.4142 14.75 10C14.75 9.58579 14.4142 9.25 14 9.25H10.75V6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text" onClick={()=>insertNewBoard('BELOW', board)}>Create new Board below</div>
                </div>

            </div>

            <div className="row-group">
                <div className="form-row">
                    <div className="left-side-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" aria-label="Archive" className="icon_component icon_component--no-focus-style"><path d="M2.42943 3.16234C2.75328 2.83849 3.19251 2.65656 3.6505 2.65656H16.3496C16.8075 2.65656 17.2468 2.83849 17.5706 3.16234C17.8945 3.48618 18.0764 3.92542 18.0764 4.38341V6.33711C18.0764 6.75132 17.7406 7.08711 17.3264 7.08711H2.67365C2.25943 7.08711 1.92365 6.75132 1.92365 6.33711V4.38341C1.92365 3.92542 2.10558 3.48619 2.42943 3.16234ZM3.6505 4.15656C3.59033 4.15656 3.53263 4.18046 3.49009 4.223C3.44755 4.26554 3.42365 4.32324 3.42365 4.38341V5.58711H16.5764V4.38341C16.5764 4.32324 16.5525 4.26554 16.51 4.223C16.4674 4.18046 16.4097 4.15656 16.3496 4.15656H3.6505ZM3.58942 7.95349C4.00363 7.95349 4.33942 8.28928 4.33942 8.70349V14.621C4.33942 14.9452 4.46821 15.2561 4.69747 15.4854C4.92674 15.7146 5.23768 15.8434 5.5619 15.8434H14.4381C14.7623 15.8434 15.0733 15.7146 15.3025 15.4854C15.5318 15.2561 15.6606 14.9452 15.6606 14.621V8.70349C15.6606 8.28928 15.9964 7.95349 16.4106 7.95349C16.8248 7.95349 17.1606 8.28928 17.1606 8.70349V14.621C17.1606 15.343 16.8738 16.0355 16.3632 16.546C15.8526 17.0566 15.1601 17.3434 14.4381 17.3434H5.5619C4.83986 17.3434 4.14738 17.0566 3.63681 16.546C3.12625 16.0355 2.83942 15.343 2.83942 14.621V8.70349C2.83942 8.28928 3.1752 7.95349 3.58942 7.95349ZM8.91846 9.78302C8.50424 9.78302 8.16846 10.1188 8.16846 10.533C8.16846 10.9472 8.50424 11.283 8.91846 11.283H11.0816C11.4959 11.283 11.8316 10.9472 11.8316 10.533C11.8316 10.1188 11.4959 9.78302 11.0816 9.78302H8.91846Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="text">Archive</div>
                </div>


                {/* <div className="form-row">
                    <div className="left-side-icon"></div>
                    <div className="text"></div>
                </div> */}
            </div>




        </div>
    )
}
