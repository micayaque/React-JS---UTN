import {React, useState} from 'react';
import { HiPlus } from "react-icons/hi";
import { taskId } from './TaskItem';

// enviará la nueva tarea a la lista principal (TaskList)

function TaskForm(props) {
    // Utilizará el estado local para gestionar la entrada del usuario 
    const [input, setInput] = useState('');

    const handldeChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: taskId,
            text: input,
            completed: false 
        });

        setInput('');
    };

    const [clase, setClase] = useState('new-task-input-hidden');

    return(
        <>
            {/* Este componente contendrá un formulario para agregar nuevas tareas. */}
            <form onSubmit={handleSubmit} className='task-form' >
                <div className='add-task-container'>
                    
                    <div><input 
                    type="text"
                    placeholder='Agrega una nueva tarea'
                    value={input}
                    name='text'
                    className='new-task-input'
                    onChange={handldeChange} 
                    /></div>
                                        
                </div>
                <div className='add-task-button-container'><button className='add-task-button' ><HiPlus className='add-button'/></button></div>
            </form>
        </>
    )
}

export {TaskForm};