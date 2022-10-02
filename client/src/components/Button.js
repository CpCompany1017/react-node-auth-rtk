import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BTN = styled.button.attrs((props) => ({
  className: "btn btn-outline text-center",
  variant: "outline",
  size: "lg",
}))`
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  font-size: 1.5rem;
  position: ${(props) => (props.icon ? "absolute" : "relative")};
  left: ${(props) => props.icon === "true" && "0"};
  top: ${(props) => props.icon === "true" && "0"};
  &:hover {
    scale: 1.1;
    transition: duration 0.5s;
    cursor: pointer;
    font-weight: 600;
  }
`;

const Button = ({ text, link, icon, type }) => {
  const navigate = useNavigate();
  return (
    <BTN
      onClick={
        link &&
        (() => {
          navigate(link);
        })
      }
      icon={icon}
      type={type}
    >
      {text}
    </BTN>
  );
};

export default Button;
