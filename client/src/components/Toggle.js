import styled from "styled-components";

const Toggle = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  position: absolute;
  top: 4px;
  right: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  flex-direction: column;
  z-index: 1000;
  &:hover {
    scale: 1.1;
    transition: duration 0.5s;
    cursor: pointer;
  }
`;

export default Toggle;
