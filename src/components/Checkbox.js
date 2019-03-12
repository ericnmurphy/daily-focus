import styled from 'styled-components'

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

export default Checkbox
