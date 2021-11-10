import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoards, setFilterBy } from '../store/actions/boardActions'

export const AppFilter = ({handleFilterChange}) => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const searchText = event.target.value
        dispatch(setFilterBy(searchText))
        handleFilterChange(searchText)
    } 

    return (
        <div className="app-filter">
            <input type="text" onChange={handleChange } />
            <div className="test">
                
            </div>
        </div>
    )
}