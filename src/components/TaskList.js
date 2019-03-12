import React, { useState } from 'react'
import styled from 'styled-components'
import sanitizeHtml from 'sanitize-html'

import Task from './Task'

const TaskListWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  ul {
    list-style: none;
    padding: 0;
  }
`

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', complete: true },
    { text: 'Task 2', complete: false },
    { text: 'Task 3', complete: false },
  ])

  const updateTask = (e, index) => {
    const newTasks = [...tasks]
    newTasks[index].text = sanitizeHtml(e.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    })
    setTasks(newTasks)
  }

  const completeTask = index => {
    const newTasks = [...tasks]
    newTasks[index].complete = !newTasks[index].complete
    setTasks(newTasks)
  }

  return (
    <TaskListWrapper>
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
    </TaskListWrapper>
  )
}

export default TaskList
