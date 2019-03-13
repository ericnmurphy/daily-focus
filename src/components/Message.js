import React from 'react'
import styled from 'styled-components'

const MessageWrapper = styled.header`
  color: #333;
  text-align: left;
  padding-bottom: 0.5rem;
`

const getMessage = tasks => {
  if (tasks.filter(task => task.complete).length === 3) {
    return (
      <>
        <h1>Finished for today! 🏁</h1>
        <p>
          You've finished with your most important tasks
          <br />
          for today.
        </p>
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

const Message = ({ tasks }) => {
  return <MessageWrapper>{getMessage(tasks)}</MessageWrapper>
}

export default Message
