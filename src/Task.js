import React from 'react'
import styled, { css } from 'styled-components'
import ContentEditable from 'react-contenteditable'

const TaskWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  label {
    display: inline-block;
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
      outline: 1px solid #2196f3;
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

const TextField = styled(ContentEditable)`
  display: inline-block;
  flex: 1;
  border: 0;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  cursor: text;
  min-height: 29px;
  min-width: 300px;
  max-width: 720px;
  word-wrap: break-word;
  text-align: left;
  border-radius: 5px;

  &:focus {
    outline: 3px solid #2196f3;
  }

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
      <label htmlFor={index} />
      <TextField
        html={task.text}
        onChange={e => updateTask(e, index)}
        tagName="span"
        complete={task.complete}
        maxLength="11"
        onKeyDown={e => {
          e.keyCode === 13 && e.preventDefault()
        }}
      />
    </TaskWrapper>
  )
}

export default Task
