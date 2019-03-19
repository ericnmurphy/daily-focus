/*global chrome*/
import React, { useState } from 'react'
import styled from 'styled-components'
import sanitizeHtml from 'sanitize-html'

import Message from './Message'
import Task from './Task'
import { spawn } from 'child_process'

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
  const [tasks, setTasks] = useState([])

  chrome.storage.local.get(['tasks'], function(results) {
    setTasks(
      results.tasks || [
        { text: '', complete: false },
        { text: '', complete: false },
        { text: '', complete: false },
      ]
    )
  })

  const updateTask = (e, index) => {
    const newTasks = [...tasks]
    newTasks[index].text = sanitizeHtml(e.target.value, {
      allowedTags: [],
      allowedAttributes: {},
    })

    // Save to Chrome local storage
    chrome.storage.local.set({ tasks: newTasks })

    setTasks(newTasks)
  }

  const completeTask = index => {
    const newTasks = [...tasks]
    newTasks[index].complete = !newTasks[index].complete

    // Save to Chrome local storage
    chrome.storage.local.set({ tasks: newTasks })

    setTasks(newTasks)
  }

  return (
    <TaskListWrapper>
      {tasks[0] && (
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
      )}
    </TaskListWrapper>
  )
}

export default TaskList
