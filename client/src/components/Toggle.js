import styled from "styled-components";

const Toggle = styled.btn`
  color: ${(props) => props.theme.backgroundColor};
  position: absolute;
  top: 4px;
  right: 14px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  float: right;
  flex-direction: column;
  z-index: 1000;
  &:hover {
    scale: 1.1;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;

export default Toggle;
