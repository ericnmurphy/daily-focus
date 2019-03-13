import React, { useState } from 'react'
import styled from 'styled-components'
import sanitizeHtml from 'sanitize-html'

import Message from './Message'
import Task from './Task'

const TaskListWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  & > div {
    background-color: #fff;
    padding: 4rem 6rem;
    border-radius: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { text: '', complete: false },
    { text: '', complete: false },
    { text: '', complete: false },
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
      <div>
        <Message tasks={tasks} />
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
      </div>
    </TaskListWrapper>
  )
}

export default TaskList
