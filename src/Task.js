import React from 'react'
import styled, { css } from 'styled-components'

const TaskWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    position: relative;
    cursor: pointer;

    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 21px;
      height: 21px;
      top: 3px;
      border: 2px solid #222;
      transition: 100ms background-color ease-in-out,
        100ms border-color ease-in-out;
    }

    ::after {
      content: '';
      display: inline-block;
      position: absolute;
      height: 7px;
      width: 14px;
      border-left: 3px solid;
      border-bottom: 3px solid;
      left: 4px;
      top: 9px;
      transform: rotate(-45deg);
      color: #fff;
      transition: 100ms opacity ease-in-out;
    }
  }

  input[type='text'] {
  }
`

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;

  & + label:after {
    opacity: 0;
  }

  &:focus {
    & + label:before {
      border-color: #2196f3;
    }
  }

  &:checked {
    & + label:before {
      background-color: #2196f3;
      border-color: #2196f3;
    }

    & + label:after {
      color: #fff;
      opacity: 1;
    }
  }
`

const TextField = styled.input`
  flex: 1;
  border: 0;
  margin-left: 2.5rem;
  font-size: 1.5rem;

  ${({ complete }) =>
    complete &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `}
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
      <label htmlFor={index}>
        <TextField
          type="text"
          onChange={e => updateTask(e, index)}
          value={task.text}
          complete={task.complete}
        />
      </label>
    </TaskWrapper>
  )
}

export default Task
