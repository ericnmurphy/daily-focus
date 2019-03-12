import React, { useState } from 'react'

import Task from './Task'

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', complete: true },
    { text: 'Task 2', complete: false },
    { text: 'Task 3', complete: false },
  ])

  const updateTask = (e, index) => {
    const newTasks = [...tasks]
    newTasks[index].text = e.target.value
    setTasks(newTasks)
  }

  const completeTask = index => {
    const newTasks = [...tasks]
    newTasks[index].complete = !newTasks[index].complete
    setTasks(newTasks)
  }

  return (
    <main>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            updateTask={updateTask}
            completeTask={completeTask}
          />
        ))}
      </ul>
    </main>
  )
}

export default TaskList
