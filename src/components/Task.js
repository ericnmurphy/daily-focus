import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import CheckboxLabel from './CheckboxLabel'
import TextField from './TextField'

const TaskWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const Task = ({ task, index, updateTask, completeTask }) => {
  return (
    <TaskWrapper>
      <Checkbox
        type="checkbox"
        id={index}
        defaultChecked={task.complete}
        onClick={() => completeTask(index)}
      />
      <CheckboxLabel htmlFor={index} />
      <TextField
        html={task.text}
        placeholder={`Task ${index + 1}`}
        onChange={e => updateTask(e, index)}
        tagName="span"
        isComplete={task.complete}
        onKeyDown={e => {
          e.keyCode === 13 && e.preventDefault()
        }}
      />
    </TaskWrapper>
  )
}

export default Task
