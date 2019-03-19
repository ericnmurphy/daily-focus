import React from 'react'
import styled from 'styled-components'

const MessageWrapper = styled.header`
  color: #333;
  text-align: left;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;

  button {
    color: #fff;
    background-color: #07cc60;
    border: 1px solid #07cc60;
    padding: 0.375rem 0.75rem;
    border-radius: 5px;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: 100ms opacity ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`

const getMessage = (tasks, clearTasks) => {
  if (tasks.filter(task => task.complete).length === 3) {
    return (
      <>
        <h1>Finished for today! 🏁</h1>
        <p>
          You've finished with your most important tasks
          <br />
          for today. Take a rest!
        </p>
        <button onClick={clearTasks}>Start fresh 🧹</button>
      </>
    )
  } else if (tasks.filter(task => task.text).length === 0) {
    const date = new Date()
    const hour = date.getHours()

    if (hour < 11) {
      return (
        <>
          <h1>Good morning! ☀️</h1>
          <p>What are your most important tasks for today?</p>
        </>
      )
    } else
      return (
        <>
          <h1>Let's go! 💪</h1>
          <p>What are your most important tasks for today?</p>
        </>
      )
  }
}

const Message = ({ tasks, clearTasks }) => {
  return <MessageWrapper>{getMessage(tasks, clearTasks)}</MessageWrapper>
}

export default Message
