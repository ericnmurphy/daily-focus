import React from 'react'
import styled from 'styled-components'

import TaskList from './components/TaskList'

const AppWrapper = styled.div`
  background-color: #fafafa;
`

const App = () => {
  return (
    <AppWrapper>
      <TaskList />
    </AppWrapper>
  )
}

export default App
