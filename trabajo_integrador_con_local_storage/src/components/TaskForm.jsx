import {React, useState} from 'react';
import { HiPlus } from "react-icons/hi";
import { taskId } from './TaskItem';
import { CiSaveDown1 } from "react-icons/ci";


// enviará la nueva tarea a la lista principal (TaskList)

function TaskForm(props) {
    // Utilizará el estado local para gestionar la entrada del usuario 
    const [input, setInput] = useState('');

    const [btnState, setBtnState] = useState(false);

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
        setBtnState(btnState => !btnState);
    };

    function handleClick(){
        setBtnState(btnState => !btnState);
    }
    let toggleClassCheck = btnState ? 'form-active' : 'hidden';
    let hiddeButtonCheck = btnState ? 'hidden' : 'add-task-button-container';

    return(
        <>
            {/* Este componente contendrá un formulario para agregar nuevas tareas. */}
            <form onSubmit={handleSubmit} className={toggleClassCheck} >
                <div className='add-task-container'>
                    
                    <div><input 
                    type="text"
                    placeholder='Agrega una nueva tarea'
                    value={input}
                    name='text'
                    className='add-task-input'
                    onChange={handldeChange} 
                    /></div>
                </div>
                <button ><CiSaveDown1 className='save-task-button'/></button>
            </form>
            <div className={hiddeButtonCheck}><button className='add-task-button' ><HiPlus onClick={handleClick} className='add-button'/></button></div>
        </>
    )
}

export {TaskForm};