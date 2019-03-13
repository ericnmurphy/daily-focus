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

const getPlaceholder = index => {
  switch (index) {
    case 0:
      return 'Your most important task for the day'

    case 1:
      return 'Your second most important task'

    case 2:
      return 'Your third most important task'

    default:
      return ''
  }
}

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
        placeholder={getPlaceholder(index)}
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
