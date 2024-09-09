import './MainPage.css'
import { objectsOfTasks } from '../../data'

export default function MainPage() {

    console.log(objectsOfTasks)

    return (
        <div>
            <h2>Your Tasks</h2>

            <section>
                <ul>
                    {objectsOfTasks.map((task, index) => (
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

