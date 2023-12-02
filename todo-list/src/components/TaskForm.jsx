import {React, useState} from 'react';

import { HiPlus } from "react-icons/hi";
import { CiSaveDown1 } from "react-icons/ci";

import { taskId } from './TaskItem';

function TaskForm(props) {

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
            <form onSubmit={handleSubmit} className={toggleClassCheck} >
                <div className='add-task-container'>
                    <input 
                    type="text"
                    placeholder='Agrega una nueva tarea'
                    value={input}
                    name='text'
                    className='add-task-input'
                    onChange={handldeChange} 
                    />
                    <button ><CiSaveDown1 className='save-task-button'/></button>
                </div>
            </form>
            <div className={hiddeButtonCheck}><button className='add-task-button' ><HiPlus onClick={handleClick} className='add-button'/></button></div>
        </>
    );
}

export default TaskForm;