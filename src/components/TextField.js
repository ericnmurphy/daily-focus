import styled, { css } from 'styled-components'
import AutosizeInput from 'react-input-autosize'

const TextField = styled(AutosizeInput)`
  display: inline-block;
  flex: 1;
  text-align: left;

  input {
    color: #333;
    border: 0;
    min-height: 29px;
    word-wrap: break-word;
    font-size: 1.5rem;
    min-width: 350px;
    max-width: 720px;
    margin-left: 2.5rem;

    ${({ isComplete, value }) =>
      isComplete &&
      value &&
      css`
        text-decoration: line-through;
        color: #ccc;
      `}

    &:focus {
      outline: 3px solid #2196f3;
    }

    &::placeholder {
      color: #ccc;
    }
  }
`

export default TextField
