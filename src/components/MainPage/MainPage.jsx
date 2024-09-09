import './MainPage.css'
import { useState } from 'react'
import FormFill from '../FormFill/FormFill';

export default function MainPage() {
    const [myTasks, setMyTasks] = useState([
        {
            taskHead: '',
            taskDesc: ''
        }
    ]);

    function addTask(newTask){
        setMyTasks([...myTasks, newTask])
    }

    return (
        <div>
            <h2>Your Tasks</h2>

            <FormFill addTask={addTask} />

            <section>
                <ul>
                    {myTasks.map((task, index) => (
                        <li key={index}>
                            <h2> { task.taskHead } </h2>
                            <p> { task.taskDesc } </p>
                            <button> edit </button> <button> delete </button><hr />
                        </li>
                    ))}
                </ul>

            </section>
        </div>
    )
}

