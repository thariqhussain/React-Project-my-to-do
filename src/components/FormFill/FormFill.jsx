import './FormFill.css'
import { useState } from 'react'

export default function FormFill({addTask}){

    const [taskHeading, setTaskHeading] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        addTask({taskHead: taskHeading, taskDesc: taskDescription})

        setTaskHeading('');
        setTaskDescription('');
    }

    return(
        <div className='form-fill'>
            <form onSubmit={handleSubmit}>
                <label> Task Heading </label><br />
                <input 
                    type='text' 
                    onChange={(e) => setTaskHeading(e.target.value)}
                    value={taskHeading}
                /><br />

                <label> Task Description </label><br />
                <textarea 
                    id='description' 
                    rows='5' 
                    cols='40' 
                    onChange={(e) => setTaskDescription(e.target.value)}
                    value={taskDescription}
                /><br />

                <button type='submit'> Add Task </button>
            </form>
        </div>
    )
}