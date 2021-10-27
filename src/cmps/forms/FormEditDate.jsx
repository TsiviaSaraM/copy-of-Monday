import React from 'react'

export const FormEditDate = ({oldDate, editDate, styles}) => {
    

    const onEditDate = (event) => {
        const newDate = event.target.value
        editDate(newDate)
    }

    return (
        <form className="form-edit-date" style={styles} action="">
            <input type="date" value={oldDate} onChange={onEditDate} />
        </form>
    )
}
