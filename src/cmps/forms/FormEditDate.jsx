import React from 'react'

export const FormEditDate = ({currDate, editDate}) => {
    

    const onEditDate = (event) => {
        const date = event.target.value
        editDate(date)
    }

    return (
        <div className="form-edit-date">
            <input type="date" value={currDate} onClick={onEditDate} />
            <button >submit</button>
        </div>
    )
}
