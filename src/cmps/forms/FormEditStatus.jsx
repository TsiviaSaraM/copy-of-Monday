import React from 'react'

export const FormEditStatus = ({selectStatus, styles, togglestatusFormOpen}) => {

    //todo use 'macro' for statuses
    return (
    <div className="form-edit-status" style={styles}>
            <div onClick={()=>selectStatus('working')} className="working option" >working on it</div>
            <div onClick={()=>selectStatus('stuck')} className="stuck option" >stuck</div>
            <div onClick={()=>selectStatus('done')} className="done option" >done</div>
            <div onClick={()=>selectStatus('')} className="none option" ></div>
        </div>
    )
}
