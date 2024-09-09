import { objectsOfTasks } from '../../data';
import './FormFill.css'
import { useRef } from 'react'

export default function FormFill(){

    let taskHeading = useRef();
    let taskDescription = useRef();

    function handleSubmit(event) {
        // event.preventDefault()

        objectsOfTasks.push({
            taskHead: taskHeading.current.value,
            taskDesc: taskDescription.current.value
        })
    }

    return(
        <div className='form-fill'>
            <form onSubmit={handleSubmit} >
                <label> Task Heading </label><br />
                <input ref={taskHeading} type='text'/><br />

                <label> Task Description </label><br />
                <textarea ref={taskDescription} id='description' rows='5' cols='40'/><br />

                <button> Add Task </button>
            </form>
        </div>
    )
}