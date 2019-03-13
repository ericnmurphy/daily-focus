import styled, { css } from 'styled-components'
import ContentEditable from 'react-contenteditable'

const TextField = styled(ContentEditable)`
  display: inline-block;
  flex: 1;
  border: 0;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  cursor: text;
  min-height: 29px;
  min-width: 450px;
  max-width: 720px;
  word-wrap: break-word;
  text-align: left;
  border-radius: 5px;

  &:focus {
    outline: 3px solid #2196f3;
  }

  ${({ isComplete, html }) =>
    isComplete &&
    html &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `}

  &:empty:before {
    content: attr(placeholder);
    color: #ccc;
  }
`

export default TextField
