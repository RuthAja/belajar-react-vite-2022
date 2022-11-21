import Card from './Card'
import Input from './Input'
import Button from './Button'
import { useState, useEffect } from 'react'

export default function Todo() {
    const [newTask, setNewTask] = useState('')
    // const [tasks, setTasks] = useState([])
    // Get Local Storage
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        const initialValue = JSON.parse(saved)
        return initialValue || ''
    })
    // Local storage Set Item
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function handleAddTask(e) {
        e.preventDefault()
        setTasks((prevTask) => [
            ...prevTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ])
        setNewTask('')
    }

    function handleCompleteTask(id) {
        const updateTask = tasks.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            }
            return task
        })
        setTasks(updateTask)
    }
    function handleRemoveTask(id) {
        const removeTask = tasks.filter((task) => task.id !== id)
        setTasks(removeTask)
    }

    return (
        <Card>
            <Card.Tittle>Todo</Card.Tittle>
            <Card.Body>
                <form>
                    <div className={'flex items-center gap-x-2'}></div>
                    <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <Button text={'Add Task'} onClick={handleAddTask} />
                </form>
                {tasks.length > 0 ? (
                    <ol className={'space-y-2 mt-4'}>
                        {tasks.map((task) => (
                            <li key={task.id} className={'flex items-center justify-between'}>
                                <span className=''>
                                    {task.name} | {task.completed ? '✅' : '❌'}
                                </span>
                                <div className={'flex items-center gap-x-2'}>
                                    <button onClick={() => handleCompleteTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        Mark as {task.completed ? 'Done' : 'Undone'}
                                    </button>
                                    <button onClick={() => handleRemoveTask(task.id)} className={'px-2 py-1 border text-xs'}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </Card.Body>
            <Card.Footer>Task {tasks.length}</Card.Footer>
        </Card>
    )
}
