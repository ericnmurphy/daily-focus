// Custom checkbox design using label field and pseudo elements

import styled from 'styled-components'

const CheckboxLabel = styled.label`
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
    transition: 50ms background-color ease-in-out, 50ms border-color ease-in-out;
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
    transition: 50ms opacity ease-in-out;
  }
`

export default CheckboxLabel
