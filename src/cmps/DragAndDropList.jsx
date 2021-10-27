import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

export function DragAndDropList() {

    const elements = [
        {id:'1', name:'q1',},
        {id:'2', name:'q2',},
        {id:'3', name:'q3',}
    ]
    return (
        <DragDropContext>  
            <Droppable droppableId="droppable" >  
                {(provided, snapshot) => (  
                    <div  
                        {...provided.droppableProps}  
                        ref={provided.innerRef}  
                    >  
                        {elements.map((item, index) => (  
                            <Draggable draggableId={item.id} index={index} key={item.id} >  
                                {(provided, snapshot) => (  
                                   <div  
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                    {/* <ListItem item={item} /> */}
                                    <div>{item.name}</div>
                                   </div>  
                                )}  
                            </Draggable>  
                        ))}  
                    </div>  
                )}  
            </Droppable>  
        </DragDropContext>
    )
}

