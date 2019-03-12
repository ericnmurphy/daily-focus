import React from 'react'

const Task = ({ task, index, updateTask, completeTask }) => {
  return (
    <li style={{ textDecoration: task.complete ? 'line-through' : '' }}>
      <input
        type="checkbox"
        defaultChecked={task.complete}
        onClick={() => completeTask(index)}
      />
      <input
        type="text"
        onChange={e => updateTask(e, index)}
        value={task.text}
      />
    </li>
  )
}

export default Task
